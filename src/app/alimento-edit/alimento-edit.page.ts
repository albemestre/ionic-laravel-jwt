//alimento-edit.page
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimento } from '../models/alimento';
import { ApiAlimentosService } from '../services/api-alimentos.service';

@Component({
  selector: 'app-alimento-edit',
  templateUrl: './alimento-edit.page.html',
  styleUrls: ['./alimento-edit.page.scss'],
})
export class AlimentoEditPage implements OnInit {


  id: number;
  data: Alimento;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiAlimentosService
  ) {
    this.data = new Alimento();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['alimento-list']);
    })
  }

}
