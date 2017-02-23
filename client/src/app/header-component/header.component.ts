import { Component } from '@angular/core';
import { Http } from '@angular/http';
let url = "header.component.html";
@Component({
    moduleId: module.id,
    selector: 'header-component',
    templateUrl: url,
//    templateUrl: "header.component.html",
    styleUrls:['header.component.css']
})

export class HeaderComponent {
   search(data: string){
       console.log(data);
   }
    
   
}