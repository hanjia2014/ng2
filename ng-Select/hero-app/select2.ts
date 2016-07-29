import { Component, Input, Output, EventEmitter, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'select2',
    templateUrl: `hero-app/select2.html`,
    styles: [`.timepicker-picker .table-condensed td{text-align:center}`],
    directives: [],
    providers: []
})
export class Select2Component implements AfterViewInit {
    @Input()
    multiple: boolean;
    @Input()
    data: any;

    ngAfterViewInit() {
        var options = {
            placeholder: "Please select",
            dropdownAutoWidth: true,
            allowClear: true,
            data: this.data
        };
        (function ($: any) {
            $("#mySel").select2(options);
        })(jQuery);

        

    }
    constructor() {

    }
}