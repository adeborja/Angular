import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.css']
})

export class PersonListComponent implements OnInit
{
    @Input() person;

    constructor(){}

    ngOnInit()
    {

    }
}