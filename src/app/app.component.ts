import { Component } from '@angular/core';
import {keys, get, toLower} from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngdata-grid';
  headers = ['nom', 'prenom', 'age', 'pseudo'];
  data = [
    {
      nom: 'AROURI',
      prenom: 'Nidhal',
      age: 25
    },
    {
      nom: 'PARKER',
      prenom: 'Peter',
      age: 25
    },
    {
      nom: 'KENT',
      prenom: 'Clarck',
      age: 25
    },
    {
      nom: 'WAYNE',
      prenom: 'Bruce',
      age: 25
    },
  ].map( item => {
    this.headers.forEach(header => {
      item[toLower(header)] = get(item, toLower(header), null)
    })
    return item;
  });
  gridStyle = {
    'grid-template-columns': `repeat(${this.headers.length}, 1fr)`,
  }

  public getKeys(obj) {
    return keys(obj);
  }

  public createArray(length, initialValue =  0) {
    return Array(length).fill(initialValue);
  }
}
