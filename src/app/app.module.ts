import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DiscountComponent} from './discount/discount.component';
import {createCustomElement} from '@angular/elements';
import {HttpClient} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        DiscountComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    entryComponents: [
        DiscountComponent
    ]
})
export class AppModule {

    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const el = createCustomElement(DiscountComponent, {injector: this.injector});
        customElements.define('ng-discount' , el);
    }


}
