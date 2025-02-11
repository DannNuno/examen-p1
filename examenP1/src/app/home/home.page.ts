import { Component } from '@angular/core';
import { ExamenService } from '../examen.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private examenservice: ExamenService ) {}

  randomquote: any;

  ngOnInit(){
    this.examenservice.getQuote().subscribe(data => {
      this.randomquote = data;
      console.log(data);
    });
  }

}
