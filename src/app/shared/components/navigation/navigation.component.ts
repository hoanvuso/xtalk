import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { SearchService} from '@/_servies/';
import {PageconfigService} from '@/_servies/pageconfig.service';  
import {CallService} from '@/_servies/call.service';
import { AuthenticationService} from '@/_servies/authentication.service';

import { Config} from '@/_models';
import { first } from 'rxjs/operators';
import {  User} from '@/_models';
import { Router} from '@angular/router';
import { Subject} from 'rxjs';
import {environment} from 'environments/environment'
import { Location } from '@angular/common';
declare var $:any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user:User;
  pageConfig;
  timer:number=0;
  isShowModal:boolean=false;
  baseUrl=environment.apiUrl;
  results: object[];
  searchTerm$ = new Subject<string>();
  actiionProfile:boolean=false;
  acitveToggleMenu:boolean=false;
  @ViewChild('toggleMenu',{static:true}) toggleMenu:ElementRef;
  @ViewChild('rightHeader',{static:true}) rightHeader:ElementRef;

  constructor(private authentication :AuthenticationService,
    private callService:CallService,private searchService:SearchService,private pageConfigService:PageconfigService,private location:Location,
    private router:Router) { 
      this.searchTerm$.subscribe(inputData => {
      });
      this.searchService.search(this.searchTerm$).subscribe(results => {
          this.results = results.data;
      });
      this.pageConfigService.currentConfig.subscribe(data=>{
        if(data !=null)
        {
          this.pageConfig=data;
        }
        else
        {
          this.pageConfig = new Config();
        }
      })
      
    }

  ngOnInit() {
    this.callService.remainingTime$.subscribe(data=>{
      if(data <=0)
      {
        this.timer=0;
      }
      else
      {
        this.timer=data;
      }
    },
    err=>{
      this.timer=0;
    })
    this.user= this.authentication.currentUserValue;
  }
  
  showAction(){
    this.actiionProfile=!this.actiionProfile;
  }

  logout(){
    this.authentication.logout();
   // this.location.back();
    //this.router.navigate(['/']);
  }
  ngAfterViewInit(){
    // $('.toggle-menu').click(function(){
    //   $('.right-header').toggleClass('active');
    //   $(this).toggleClass('active');
    // });
    // this.toggleMenu.nativeElement.on('click',(event)=>{
    //   this.rightHeader.nativeElement.classList.add('active');
    //   //$(this).toggleClass('active');
    //   this.acitveToggleMenu=!this.acitveToggleMenu;
    // })

    // $('.toogle-chat').click(function(){
    //   $('.chat-main').toggleClass('active');
    //   $(this).toggleClass('active');
    // });

   
  }

 
}
