import { Component } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myObject: AngularFireObject<any>;

  constructor(private af: AngularFireDatabase) {
    console.log('firebase');



  }
}
