import {Component, Injectable, Inject, EventEmitter, bootstrap} from 'ng-forward';

// Example from ng-forward readme, rewritten in TypeScript
// TypeScript isn't necessary though

@Injectable()
@Inject('$q', '$timeout')
class TestService {
    constructor(private $q, private $timeout) { }

    getValue() {
        return this.$q(resolve => {
            this.$timeout(() => resolve('Async FTW!'), 3000);
        });
    }
}

@Component({ selector: 'nested', template: '<h3>Nested</h3>' })
class Nested { }

@Component({
    selector: 'inner-app',
    directives: [Nested],
    inputs: ['message1', 'message2', 'msg3:message3'],
    outputs: ['event1', 'event2'],
    template: `
        <h2>Inner app</h2>
        <p>ES7 async resolved value: {{ innerApp.num || 'resolving...' }}</p>
        <nested></nested>

        <h4>Event</h4>
        <button (click)="innerApp.triggerEventNormally()">
            Trigger DOM Event
        </button>
        <button (click)="innerApp.triggerEventViaEventEmitter()">
            Trigger Emitted Event
        </button>

        <h4>One Way String from Parent (read-only)</h4>
        <p>{{innerApp.msg3}}</p>

        <h4>One Way Binding from Parent (read-only)</h4>
        <input ng-model="innerApp.message1"/>

        <h4>Two Way Binding to/from Parent (read/write)</h4>
        <input ng-model="innerApp.message2"/>
    `
})
@Inject(TestService, '$element')
class InnerApp {
    public event2 = new EventEmitter();

    constructor(public TestService, public $element) {
        this.resolveValue();
    }

    resolveValue() {
        this.TestService.getValue().then(val => this.num = val);
    }

    triggerEventNormally() {
        this.$element.triggerHandler('event1');
    }

    triggerEventViaEventEmitter() {
        this.event2.next()
    }
}

@Component({
    selector: 'app',
    providers: [TestService, "ui.router"],
    directives: [InnerApp, Nested],
    template: `
        <h1>App</h1>
        <nested></nested>
        <p>Trigger count: {{ app.triggers }}</p>

        <h4>One Way Binding to Child:</h4>
        <input ng-model="app.message1"/>

        <h4>Two Way Binding to/from Child:</h4>
        <input ng-model="app.message2"/>

        <hr/>
        <inner-app (event1)="app.onIncrement()" (event2)="app.onIncrement()"
                   [message1]="app.message1" [(message2)]="app.message2" message3="Hey, inner app... nothin'">
        </inner-app>
    `
})
class AppCtrl {
    constructor() {
        this.triggers = 0;
        this.message1 = 'Hey, inner app, you can not change this';
        this.message2 = 'Hey, inner app, change me';
    }

    onIncrement() {
        this.triggers++;
    }
}

bootstrap(AppCtrl);