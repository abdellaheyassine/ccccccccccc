import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TypeService } from './type.service';
import { Type } from '../beans/type'

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  
  types: Type[];
  typeForm: FormGroup;
  operation: string = 'add';
  selectedType: Type;

  constructor(private typeService: TypeService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initType();
    this.loadTypes();
  }

  createForm() {
    this.typeForm = this.fb.group({
      role: ''
    });
  }

  loadTypes() {
    this.typeService.getTypes().subscribe(
      data => { this.types = data },
      error => { console.log('ERREUR !!!') },
      () => { console.log('Le chargement des types de compte est terminé') }
    );
  }

  addType() {
    const t = this.typeForm.value;
    this.typeService.addType(t).subscribe(
      res => {
        this.initType();
        this.loadTypes();
      }
    );
  }

  updateType() {
    console.log("Mise a jour " + this.selectedType.role);
    this.typeService.updateType(this.selectedType).subscribe(
      res => {
        this.initType();
        this.loadTypes();
        this.operation = "add";
      }
    );
  }

  deleteType() {
    this.typeService.deleteType(this.selectedType.id).subscribe(
      res => {
        this.selectedType = new Type();
        this.loadTypes();
      }
    );
  }

  initType() {
    this.selectedType = new Type();
    this.createForm();
  }

}

