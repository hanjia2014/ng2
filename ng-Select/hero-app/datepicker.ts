import { Component, Input, Output, EventEmitter, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'date-picker',
    template: `<div class="input-group date" id="{{id}}">
                    <input type="text" class="form-control" >
                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                </div>`,
    styles: [],
    directives: [],
    providers: []
})
export class DatePickerComponent implements AfterViewInit {
    @Input()
    id: string;
    @Input()
    IncludeTime: boolean;
    @Output()
    onValueChange = new EventEmitter<Date>();

    ngAfterViewInit() {
        var options = {
            pick12HourFormat: true,
            pickTime: this.IncludeTime,
        };
        
        $("#" + this.id).datetimepicker(options).on("change", (e: any) => {
            this.onValueChange.next(new Date(e.timeStamp));
        });
        
    }
    constructor() {
        
    }
}