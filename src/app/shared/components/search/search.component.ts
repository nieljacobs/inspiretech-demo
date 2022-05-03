import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { genericSearch } from '../../models/utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent<T> implements OnInit {

  @Input() data = Array<T>();
  @Input() searchProps: string[];

  @Output() onSearched: EventEmitter<T[]> = new EventEmitter<T[]>();

  searchString: string = '';

  constructor() { }

  ngOnInit(): void {

    //this.search()

  }

  search(): void {

    let result = this.data.filter(e => genericSearch(e, this.searchProps, this.searchString));
    this.onSearched.emit(result);
    console.log(result.length);

  }


}
