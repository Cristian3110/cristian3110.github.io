import { Component } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent {
  termino: string = '';
  constructor() {}

  buscar() {
    console.log('Hola mundo ');
    console.log(this.termino);
  }
}