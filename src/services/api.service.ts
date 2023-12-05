import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../model/categoria';
import { Usuario } from '../model/usuario';
import { NgForm } from '@angular/forms';

const apiUrl = 'https://localhost:44390/api/categorias';
const apiLoginUrl = 'https://localhost:44390/api/login';
let token = '';  // Inicialize como uma string vazia
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  montaHeaderToken() {
    token = localStorage.getItem('jwt') || '';
    console.log('jwt header ' + token);
    httpOptions.headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,  // Adicione um espaço antes de Bearer
      'Content-Type': 'application/json',
    });
  }

  Login(Usuario: NgForm): Observable<Usuario> {
    return this.http.post<Usuario>(apiLoginUrl, Usuario).pipe(
      tap((Usuario: Usuario) =>
        console.log(`Login usuario com email = ${Usuario.email}`)),
      catchError(this.handleError<Usuario>('Login'))
    );
  }

  getCategorias(): Observable<Categoria[]> {
    this.montaHeaderToken();
    console.log(httpOptions.headers);
    return this.http.get<Categoria[]>(apiUrl, httpOptions).pipe(
      tap(Categorias => console.log('leu as Categorias')),
      catchError(this.handleError('getCategorias', []))
    );
  }

  getCategoria(id: number): Observable<Categoria> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Categoria>(url, httpOptions).pipe(
      tap(_ => console.log(`leu a Categoria id=${id}`)),
      catchError(this.handleError<Categoria>(`getCategoria id= ${id}`))
    );
  }

  addCategoria(categoria: Categoria): Observable<Categoria> {
    this.montaHeaderToken();
    return this.http.post<Categoria>(apiUrl, categoria, httpOptions).pipe(
      tap((novaCategoria: Categoria) =>
        console.log(`Adicionou a Categoria com w/ id=${novaCategoria.categoriaId}`)
      ),
      catchError(this.handleError<Categoria>('addCategoria'))
    );
  }
  
  

  updateCategoria(id: any, Categoria: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http
      .put(url, Categoria, httpOptions)
      .pipe(
        tap(_ => console.log(`atualiza o produto com id=${id}`)),
        catchError(this.handleError<any>('updateCategoria'))        
      );
  }

  deleteCategoria(id: any): Observable<Categoria> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Categoria>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a Categoria com id=${id}`)),
      catchError(this.handleError<Categoria>('deleteCategoria'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
