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
    
  }

  ionViewWillEnter() {
    this.getAllAlimentos();
  }

  getAllAlimentos() {
    debugger
    this.apiService.getList().subscribe(response => {
      debugger;
      console.log(response);
      this.alimentosData = response['data']
    })
  }


  delete(item) {
    
    this.apiService.deleteItem(item.id).subscribe(Response => {
      this.getAllAlimentos();
    });
  }

}
