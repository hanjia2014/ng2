import {Component} from 'angular2/core';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'hello-world',

  // Location of the template for this component
  templateUrl: 'app/hello_world.html'
})
export class HelloWorld {

  // Declaring the variable for binding with initial value
  yourName: string = '';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/