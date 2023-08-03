import { MatTableFilter } from 'mat-table-filter';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export class SpaceCraft {
  name: string;
  isConstitutionClass: boolean;
  dogName: string;
  age: number;
}

const SPACECRAFT_DATA: SpaceCraft[] = [
  { name: 'Endurance', isConstitutionClass: false, dogName: 'Lucas', age: 12 },
  {
    name: 'Enterprise',
    isConstitutionClass: false,
    dogName: 'Scobby',
    age: 22,
  },
  { name: 'Discovery', isConstitutionClass: false, dogName: 'Tommy', age: 32 },
  { name: 'Enterprise', isConstitutionClass: false, dogName: 'Pepa', age: 32 },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  filterEntity: { [key: string]: any } = {};
  filterType: MatTableFilter;
  displayedColumns: string[] = [
    'name',
    'dogName',
    'age',
    'isConstitutionClass',
  ];
  dataSource;
  propertyOptions = {};
  options: { name: string; selected: boolean }[];
  yourArrayOfSelections: string[] = [];
  constructor() {}

  ngOnInit() {
    const uniqueNames = Array.from(
      new Set(SPACECRAFT_DATA.map((spacecraft) => spacecraft.name))
    );
    this.options = uniqueNames.map((name) => ({ name, selected: false }));

    // Do not forget to initialize your object and it's non-primitive properties
    this.filterEntity = new SpaceCraft();
    this.filterType = MatTableFilter.ANYWHERE;
    this.dataSource = new MatTableDataSource(SPACECRAFT_DATA);
    // let yourArrayOfSelections: string[] = ['Endurance', 'Enterprise'];
    // this.propertyOptions = {
    //   name: (routeName: string) => {
    //     // Custom filtering for name property
    //     console.log('tealav');
    //     return 'Endurance' === this.filterEntity.name;
    //     // return routeName.split('-')[1] === this.filterEntity.name; // filter for only the station in the middle
    //   },
    // };
    this.propertyOptions = {
      name: (item: string) => {
        // Custom filtering for yourProperty
        let selected = this.options
          .filter((x) => x.selected)
          .map((x) => x.name);
        return selected.includes(item);
      },
    };
  }
  applyFilter(colName: string) {
    this.propertyOptions[colName] = 
    // this.propertyOptions = {
    //   name: (item: string) => {
    //     // Custom filtering for yourProperty
    //     let selected = this.options
    //       .filter((x) => x.selected)
    //       .map((x) => x.name);
    //     return selected.includes(item);
    //   },
    // };
  }
  // applyFilter(colName: string) {
  //   console.log(this.filterEntity[colName]);
  //   let q = this.options
  //     .filter((x) => x.selected)
  //     .map((x) => x.name)
  //     .join(',');
  //   console.log(q);
  //   this.filterEntity[colName] = q;
  //   // delete this.filterEntity[colName];
  // }
  cancel() {}
}
