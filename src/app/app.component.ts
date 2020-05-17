import { Component } from '@angular/core';
import {keys, get, toLower, map as lodashMap} from 'lodash';
import { data as mockData, headers as mockHeaders } from './mock/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngdata-grid';
  headers = mockHeaders;
  data = mockData.map( item => {
    this.headers.forEach(header => {
      item[toLower(header)] = get(item, toLower(header), null);
    });
    return item;
  });
  gridStyle = {
    'grid-template-columns': `repeat(${this.headers.length}, 1fr)`,
  };

  public getHeadersAttributes() {
    return lodashMap(this.headers, 'key');
  }
}
