import { Component, Input } from '@angular/core';

@Component({
    selector: 'input-component',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.css']
})

export class InputComponent{

    @Input() voto:string;

    coontructor(){
        console.log('estoy entrando');
    }
}