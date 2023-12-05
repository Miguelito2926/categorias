import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Adicionei a exclamação para indicar que será inicializado no ngOnInit
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  addLogin(form: NgForm) {
    this.isLoadingResults = true;
    this.api.Login(form)
      .subscribe(res => {
        localStorage.setItem("jwt", res.token);
        this.isLoadingResults = false;
        this.router.navigate(['/categorias']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
