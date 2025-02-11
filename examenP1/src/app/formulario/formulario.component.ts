import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  imports: [IonicModule, CommonModule],
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {
  items: { id: number; name: string; year: string; nameauthor: string; casaproductora: string; protagonista: string }[] = [];
  nextId: number = 1;

  addItem(name: string, year: string, nameauthor: string, casaproductora: string, protagonista: string): void {
    if (name.trim() && nameauthor.trim() && casaproductora.trim() && protagonista.trim()) {
      this.items.push({
        id: this.nextId++,
        name: name.trim(),
        year: year,
        nameauthor: nameauthor.trim(),
        casaproductora: casaproductora.trim(),
        protagonista: protagonista.trim(),
      });
    } else {
      console.error('Los campos no pueden estar vacíos');
    }
  }

  constructor() { }

  ngOnInit() {}

}
