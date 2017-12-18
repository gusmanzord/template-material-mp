import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-importar-processo',
  templateUrl: './importar-processo.component.html',
  styleUrls: ['./importar-processo.component.css']
})
export class ImportarProcessoComponent {
  animalControl = new FormControl('', [Validators.required]);
  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  constructor() { }
  }
