import { Component } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'my-app',
    template: `
        <spinner-component [isLoaderVisible] = "isLoaderVisible" ></spinner-component>
        <section class="container-fluid nopadding">
            <router-outlet></router-outlet>
        </section>
    `,
})
export class AppComponent {
    public isLoaderVisible: boolean;
    constructor(private spinner: SpinnerService) {
        spinner.status.subscribe((status: boolean) => {
            this.isLoaderVisible = status;
        });
    }
}
