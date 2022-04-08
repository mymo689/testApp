import { Component } from '@angular/core';
import { Filter, IDataField } from 'ngx-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newConditionList = [];
  dataFieldList: IDataField[] = [
    {
      text: 'Author',
      type: 'string',
      fieldName: 'author'
    },
    {
      text: 'Title',
      type: 'string',
      fieldName: 'title'
    },
    {
      text: 'Date Published',
      type: 'date',
      fieldName: 'publishedDT'
    },
    {
      text: 'Copies Sold',
      type: 'number',
      fieldName: 'copiesSold'
    }
  ]

  filterChanged(x: any): void {
    console.log('FC', x);
  }

  filterReset(): void {
    console.log('FR');
  }

  queryExecuted(x: any): void {
    console.log('QE', x);
  }

  maxDepthReached(): void {
    console.log('MDR');
  }
}
