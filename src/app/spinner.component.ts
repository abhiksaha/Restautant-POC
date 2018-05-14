import { Component, Input } from '@angular/core';

@Component({
    selector: 'spinner-component',
    templateUrl: '../views/spinner-component.html'
})
export class SpinnerComponent {
    @Input() isLoaderVisible: boolean;
}