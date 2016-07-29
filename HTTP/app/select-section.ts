import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { SingleDemoComponent } from './single-demo';
import { MultipleDemoComponent } from './multiple-demo';
import { ChildrenDemoComponent } from './children-demo';
import { RichDemoComponent } from './rich-demo';

let name = 'Select';

let tabsContent:string = ``;
tabDesc.forEach((desc:any) => {
  tabsContent += `
<div *ngIf="currentHeading === '${desc.heading}'">
  <${desc.heading.toLowerCase()}-demo>
  </${desc.heading.toLowerCase()}-demo>
</div>
<tab heading="${desc.heading}" (select)="select_zzz($event)">
  <div class="card card-block panel panel-default panel-body">
    <br>

    <div class="row" style="margin: 0px;">
      <tabset>
        <tab heading="Markup">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-html"><code class="language-html" ngNonBindable>${desc.html}</code></pre>
          </div>
        </tab>
        <tab heading="TypeScript">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-typescript">
              <code class="language-typescript" ngNonBindable>${desc.ts}</code>
            </pre>
          </div>
        </tab>
      </tabset>
    </div>
  </div>
</tab>
  `;
});

@Component({
  selector: 'select-section',
  template: `
  <section id="${name.toLowerCase()}">
    <div class="row">
      <tabset>

        ${tabsContent}

      </tabset>
    </div>

    <div class="row">
      <h2>API</h2>
      <div class="card card-block panel panel-default panel-body">${doc}</div>
    </div>
  </section>
  `,
  directives: [SingleDemoComponent, MultipleDemoComponent, ChildrenDemoComponent, RichDemoComponent, TAB_DIRECTIVES, CORE_DIRECTIVES]
})
export class SelectSectionComponent {
  public currentHeading:string = 'Single';

  public select_zzz(e:any):void {
    if (e.heading) {
      this.currentHeading = e.heading;
    }
  }
}
