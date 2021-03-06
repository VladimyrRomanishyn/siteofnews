import { Component, Inject, OnInit} from '@angular/core';
import { Http } from '@angular/http';


//import {HeaderService} from '../services/header.services';

@Component({
    moduleId: module.id,
    selector: 'content-component',
    templateUrl: 'content.component.html',
    styleUrls:['content.component.css']
})

export class ContentComponent implements OnInit {
    private data: any;
    private isHidden = false;
    constructor(@Inject(Http) private http: Http){}

    ngOnInit(){
        this.http.get('http://localhost/main/api')
           .subscribe((data)=>{ this.data = data.json()});
    }

    create(){
        for(let item of this.data){console.log(item)}
    }
    
}