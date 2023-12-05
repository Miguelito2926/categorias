import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
  // Removi a inicialização aqui, pois o formGroup não parece ser necessário no seu caso
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    // Deixei este método vazio, pois parece que não precisa inicializar nada
  }

  addLogout() {
    localStorage.removeItem("jwt");
    this.isLoadingResults = true;
    this.router.navigate(['/login']);
  }
}
