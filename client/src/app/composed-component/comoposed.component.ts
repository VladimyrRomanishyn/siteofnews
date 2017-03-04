import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';



@Component({
    moduleId: module.id,
    selector: 'composed-component',
    templateUrl: 'composed.component.html',
    styleUrls:['composed.component.css']
})
                     
export class ComposedComponent implements OnInit {
   
//	@ViewChild('mainWidth') mainWidth;
//	@ViewChild('feedbackWidth') feedbackWidth;
    private articles = [];
    private full = false;
    private feedbackToggle = false;
    private title;
    private email;
    private message;
    private search;
    private Language = "en";
    
    
    constructor(@Inject(Http) private http: Http){}
               
    ngOnInit(){
        this.http.get('http://localhost/main/api')
           .subscribe((data)=>{ this.articles = data.json()});
        
    }

    feedback(event){
		
		
        let className = event.target.className;
        if(className == 'fa fa-envelope fa-lg' || className == 'row' ||className == 'fa fa-window-close fa-lg' ){
            this.feedbackToggle = !this.feedbackToggle; 
//			 console.log(this.mainWidth.nativeElement.scrollHeight);
//		console.log(this.feedbackWidth);
        } else {
            return;
        }
     
    }
    
    detail(article){

        this.articles = [];
        this.articles.push(article);
        this.full = true;
        
    }
    
    submit(){
       
        let body = JSON.stringify({
            title: this.title,
            email: this.email,
            message: this.message
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers});

        this.http.post('http://localhost/messages', body, options).subscribe();
        this.feedbackToggle = !this.feedbackToggle; 
    }
    
    changeLanguage(){
		this.full = false;
        if(this.Language == "en"){
//            console.log("en");
            
            this.http.get('http://localhost/main/api_rus')
           .subscribe((data)=>{ this.articles = data.json()});
            this.Language = "ru";
        } else if(this.Language == "ru"){
//            console.log("ru");
            this.http.get('http://localhost/main/api')
           .subscribe((data)=>{ this.articles = data.json()});
            this.Language = "en";
		}
             
    }
	
	onSearch(){
	
		if (this.search === undefined ) {
			return;
		}
	
		let en = /[a-z 0-9]/i;
		let ru = /[а-я 0-9]/i;
	
		if (this.search.match(en)){

			this.http.get('http://localhost/search')
			.subscribe((data)=>{ 
//    console.log(data._body  );
//        for (let i of data){console.log(i)}
//			});
		
		} else if (this.search.match(ru)){
			console.log('Russian language')
		}
	}

}
