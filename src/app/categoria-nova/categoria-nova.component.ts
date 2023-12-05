import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-categoria-nova',
  templateUrl: './categoria-nova.component.html',
  styleUrls: ['./categoria-nova.component.scss']
})
export class CategoriaNovaComponent implements OnInit {
  categoriaForm: FormGroup = this.formBuilder.group({
    'nome': [null, Validators.required],
    'imagemUrl': [null, Validators.required]
  });

  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {}

  addCategoria() {
    this.isLoadingResults = true;
    this.api.addCategoria(this.categoriaForm.value)
      .subscribe(
        (novaCategoria) => {
          if (novaCategoria && novaCategoria.categoriaId) {
            console.log(`Adicionou a Categoria com id=${novaCategoria.categoriaId}`);
          }
          this.isLoadingResults = false;
          this.router.navigate(['/categorias']);
        },
        (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
