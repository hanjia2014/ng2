import { Component }         from '@angular/core';
import './rxjs-operators';
import { WikiComponent }      from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';

@Component({
  selector: 'my-app',
  template: `
    <my-wiki></my-wiki>
    <my-wiki-smart></my-wiki-smart>
  `,
/*
  providers: [ HTTP_PROVIDERS ]
*/
  directives: [
    WikiComponent, WikiSmartComponent
  ]
})
export class AppComponent { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/