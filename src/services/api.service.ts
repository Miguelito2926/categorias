import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Categoria } from '../model/categoria';
import { Usuario } from '../model/usuario';
import { NgForm } from '@angular/forms';

const apiUrl = 'https://localhost:44390/api/categorias';
const apiLoginUrl = 'https://localhost:44390/api/login';
var token;
var httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  montaHeaderToken() {
    token = localStorage.getItem('jwt');
    console.log('jwt hwader' + token);
    httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + token,
        'Content-Type': 'application/json',
      }),
    };
  }

  Login(Usuario: NgForm): Observable<Usuario> {
    return this.http.post<Usuario>(apiLoginUrl, Usuario).pipe(
      tap((Usuario: Usuario) =>
        console.log(`Login usuario com email = ${Usuario.email}`)),
      catchError(this.handelError<Usuario>('Login'))
    );
  }
  getCategorias(): Observable<Categoria[]> {
    this.montaHeaderToken();
    console.log(httpOptions.headers);
    return this.http.get<Categoria[]>(apiUrl, httpOptions).pipe(
      tap((_)=> console.log('leu as Categorias')),
      catchError(this.handelError('getCategorias', []))
    );
  }
  getCategoria(id: number): Observable<Categoria> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Categoria>(url, httpOptions).pipe(
      tap((_) => console.log(`leu a Categoria id=${id}`)),
      catchError(this.handelError<Categoria>(`getCategoria id= ${id}`))
    );
  }
  addCategoria(Categoria: any): Observable<Categoria> {
    this.montaHeaderToken();
    return this.http.post<Categoria>(apiUrl, Categoria, httpOptions).pipe(
      tap((Categoria: Categoria) =>
        console.log(`adicionou a Categoria com w/ id=${Categoria}`)
      ),
      catchError(this.handelError<any>('Categoria'))
    );
  }
  updateCategoria(id: any, Categoria: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http
      .put(url, Categoria, httpOptions)
      .pipe(
        tap(
          (_ => console.log(`atualiza o produto com id=${id}`)),
          catchError(this.handelError<any>('updateCategoria'))
        )
      );
  }
  deleteCategoria(id: any): Observable<Categoria> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Categoria>(url, httpOptions).pipe(
        tap(_ => console.log(`remove a Categoria com id=${id}`),
          catchError(this.handelError<Categoria>('deleteCategoria')))
      );
  }
  private handelError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
