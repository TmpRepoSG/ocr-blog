import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyDXqVfNmeHg9xRhmPwoknpehPsMKKX7ZnU",
      authDomain: "mon-projet-blog.firebaseapp.com",
      databaseURL: "https://mon-projet-blog.firebaseio.com",
      projectId: "mon-projet-blog",
      storageBucket: "mon-projet-blog.appspot.com",
      messagingSenderId: "203964418815"
    };
    firebase.initializeApp(config);
  }
}
