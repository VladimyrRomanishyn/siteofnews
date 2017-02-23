import { Component, Inject} from '@angular/core';
import { Http } from '@angular/http';
///dfgf

//import {HeaderService} from '../services/header.services';

@Component({
    moduleId: module.id,
    selector: 'content-component',
    templateUrl: 'content.component.html',
    styleUrls:['content.component.css']
})

export class ContentComponent {
    private data: any;
    private isHidden = false;
    constructor(@Inject(Http) private http: Http){
       this.http.get('http://localhost/main/api')
           .subscribe((data)=>{ this.data = data.json()});
    
       
    }
    create(){
        for(let item of this.data){console.log(item)}
    }
    
}