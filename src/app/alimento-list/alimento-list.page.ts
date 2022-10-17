//alimento-list.page.ts
import { Component, OnInit } from '@angular/core';
import { ApiAlimentosService } from '../services/api-alimentos.service';

@Component({
  selector: 'app-alimento-list',
  templateUrl: './alimento-list.page.html',
  styleUrls: ['./alimento-list.page.scss'],
})
export class AlimentoListPage implements OnInit {

  alimentosData: any;

  constructor(
    public apiService: ApiAlimentosService
  ) {
    this.alimentosData = [];
  }

  ngOnInit() {
    // this.getAllAlimentos();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllAlimentos();
  }

  getAllAlimentos() {
    //Get saved list of alimentos
    this.apiService.getList().subscribe(response => {
      debugger;
      console.log(response);
      this.alimentosData = response['data']
    })
  }


  delete(item) {
    //Delete item in Alimento data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllAlimentos();
    });
  }

}
