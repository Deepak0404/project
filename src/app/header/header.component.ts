import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles:[`
        .navbar-default .navbar-brand {
            padding: 0 !important;
        }
    `]
})
export class HeaderComponent{

}