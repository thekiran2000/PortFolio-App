import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit , OnChanges} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent implements OnInit,OnChanges {

  constructor(private _vps: ViewportScroller) { }

  @Input() aboutShowFlag:any;
  @Input() internShowFlag:any;
  public showAboutSection:boolean=false;
  public showIntroSection:boolean=true;

  public dateTimeAgo = moment("2021-06-07 12:00:26.123").fromNow();
  
  public toTop(elem:string) {
    // this.showAboutSection=false;
    (document.getElementById(elem) as HTMLElement).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  public toggleIntroSection(){
    this.showIntroSection=!this.showIntroSection;
  }
  ngOnChanges(){
    if(this.aboutShowFlag){
      this.showAboutSection=this.aboutShowFlag;
    }
    else{
      this.showAboutSection=this.aboutShowFlag;
    }
  }

  ngOnInit(): void {
    // this.kkkk=`<span class="iconify" data-icon="healthicons:virus-outline"></span>`;
    this.ProjectObject={
      django:[
        {
          name:'CollegeDost',
          img:'college',
          details:'Useful tool for aspirants to find relevant colleges and explore them.'
        },
        {
          name:"ECommerce",
          img:'cart',
          details:"Shopping website prototype like amazon and flipkart"
        },
        {
          name:"EasyExam",
          img:'exam',
          details:"Useful tool for students to find difficult meanings from notes easily."
        }
      ],
      FlutterA:[
        {
          name:'AgriEase',
          img:'farm',
          details:'agriculture application which helps in several parameters such as weather,market values etc'
        },
        {
          name:"Chatter",
          img:'chat',
          details:"A chatting app which includes chatting between friends and strangers"
        },
        {
          name:"ShopNest",
          img:'shop',
          details:"A Shopping app which having functionalities like amazon with panel for shop owners."
        },
      ],
      FlutterB:[
        {
          name:'CovidOmeter',
          img:'virus',
          details:'CovidOmeter app gives daily count of cases with  visual analysis and counts across several regions'
        },
        {
          name:"MovieReviews",
          img:'imdb',
          details:"MovieReviews gives complete summary of movie with its IMDB ratings"
        },
        {
          name:"TenShorts",
          img:'news',
          details:"Useful application to fetch latest top 10 news in short and sweet like structure"
        },
      ],
      Angular:[
        {
          name:'MovieReviews',
          img:'movie',
          details:'Useful tool for getting movie related info and its IMDB rating.'
        },
        {
          name:"Melody",
          img:'music',
          details:"A complete music app to listen and explore music like spotify"
        },
        {
          name:"PortFolio",
          img:'user',
          details:"Portfolio website for more information about myself"
        },
      ],
      Python:[
        {
          name:'CollegeDost',
          img:'college',
          details:'Useful tool for aspirants to find relevant colleges and explore them.'
        },
        {
          name:"ECommerce",
          img:'cart',
          details:"Shopping website prototype like amazon and flipkart"
        },
        {
          name:"EasyExam",
          img:'exam',
          details:"Useful tool for students to find difficult meanings from notes easily."
        },
      ]
    }

  }

  public ProjectObject:any;
  public kkkk:any;



}
