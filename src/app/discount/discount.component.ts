import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.css'],
    encapsulation: ViewEncapsulation.Native
})
export class DiscountComponent implements OnInit {


    code: string;

    constructor() {
    }


    ngOnInit() {

    }


    public hasDiscount() {

        // this.http.get('docker.for.mac.localhost:80').subscribe(data => {
        //     console.log('data recvire');
        //     console.log(data);
        // });
    }
}
