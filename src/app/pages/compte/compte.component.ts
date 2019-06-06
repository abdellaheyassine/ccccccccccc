import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompteService } from './compte.service';
import { Type } from '../beans/Type';
import { Compte } from '../beans/Compte';
import { TypeService } from '../type/type.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

      comptes : Compte[];
      types : Type[];
      type : Type;
      type2 : Type;
      compteForm: FormGroup;
      operation: string = 'add';
      selectedCompte :Compte ;


  constructor(private compteService:CompteService,private typeService:TypeService,private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    this.initCompte();
    this.loadComptes();
    this.loadTypes();
  }

  createForm(){
    this.compteForm = this.fb.group({
      login: '',
      password:'',
      type:''
    });
  }

  loadComptes(){
    this.compteService.getComptes().subscribe(
      data => {this.comptes = data},
      error => {console.log('ERREUR !!!')},
      () => {console.log('Le chargement des comptes est terminé ')}
      
    );
  }

  loadTypes(){
    this.typeService.getTypes().subscribe(
      data => {this.types = data},
      error => {console.log('ERREUR !!!')},
      () => {console.log('Le chargement des types de compte est terminé')}
    );
  }

  findTypeById(id:any):any{
    console.log('type '+this.selectedCompte.type)
     this.typeService.getTypeById(id).subscribe(
      data => {this.type = data},
      error => {console.log('ERREUR !!!')},
      () => {console.log('Le chargement des types de compte est terminé')}
    );
    return this.type;
  }

  addCompte(){
    console.log('type  '+this.selectedCompte.type)
    const c = this.compteForm.value;
    console.log('find by ' + this.findTypeById(this.selectedCompte.type));
    if(this.findTypeById(this.selectedCompte.type)!=null){
      c.type = this.findTypeById(this.selectedCompte.type);
    }    
    this.compteService.addCompte(c).subscribe(    
      res => {
        this.initCompte();
        this.loadComptes();
      }
    );
  }

  updateCompte(){
    if(this.findTypeById(this.selectedCompte.type)!=null){
      this.selectedCompte.type = this.findTypeById(this.selectedCompte.type);
    }  
    this.compteService.updateCompte(this.selectedCompte).subscribe(
      res => {
        this.initCompte();
        this.loadComptes();
        this.operation="add";
      }
    );
  }

  deleteCompte(){
    this.compteService.deleteCompte(this.selectedCompte.id).subscribe(
      res => {
        this.selectedCompte = new  Compte();
        this.loadComptes();
      }
    );
  }

  initCompte(){
    this.selectedCompte = new Compte();
    this.createForm();
  }
}
