import { Component, Input, Output, EventEmitter, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'select2',
    templateUrl: `hero-app/select2.html`,
    styles: [`.timepicker-picker .table-condensed td{text-align:center}`],
    directives: [],
    providers: []
})
export class Select2Component implements AfterViewInit {
    ngAfterViewInit() {
        $(document).ready(function () {
            (function ($: any) {
                $("#mySel").select2({
                });
            })(jQuery);
        });
    }
    constructor() {
    }
}