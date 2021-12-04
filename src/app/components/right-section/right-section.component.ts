import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit , OnChanges} from '@angular/core';
import * as moment from 'moment';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent implements OnInit,OnChanges {
  blogs: any;
  blogsObject: any;
  showBlogsDetails: boolean=false;

  constructor(private _vps: ViewportScroller,private blogserve:BlogsService) { }

  @Input() aboutShowFlag:any;
  @Input() internShowFlag:any;
  public showAboutSection:boolean=false;
  public showIntroSection:boolean=true;
  public showBlogsSection:boolean=false;
  public showBlogsSectionLoading:boolean=false;

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

  public showBlogsListFunc(){
    this.showBlogsDetails=false;
  }

  ngOnChanges(){
    if(this.internShowFlag){
      console.log("hey");
      this.showBlogsSection=true;
    }
    else if(!this.internShowFlag){
      console.log("hey");
      this.showBlogsSection=false;
    }
    if(this.aboutShowFlag){
      this.showAboutSection=this.aboutShowFlag;
    }
    else{
      this.showAboutSection=this.aboutShowFlag;
    }
  }

  public openBlogDetails(item:any){
    this.showBlogsDetails=true;
    this.blogsObject=item;
  }

  public names = [
    "Rule 1",
    "Rule 2",
    "Rule 3",
    "Rule 4",
    "Rule 5"
  ];

  // funct(event:any){
  //   this.names[i]=(event.target as HTMLElement).textContent;
  // }

  public njust:any;

  ngOnInit(): void {
    this.blogserve.getPolicies().subscribe((data)=>{
      this.blogs = data.map((item)=>{
        return item.payload.doc.data();
      });
      this.showBlogsSectionLoading=true;
      console.log(this.blogs);
    });
    this.ProjectObject={
      django:[
        {
          name:'CollegeDost',
          img:'college',
          web_link:'https://github.com/thekiran2000/CollegeDost',
          details:'Useful tool for aspirants to find relevant colleges and explore them.'
        },
        {
          name:"ECommerce",
          img:'cart',
          web_link:'https://github.com/thekiran2000/Shopping_web',
          details:"Shopping website prototype like amazon and flipkart"
        },
        {
          name:"EasyExam",
          img:'exam',
          web_link:'https://github.com/thekiran2000/EasyExam',
          details:"Useful tool for students to find difficult meanings from notes easily."
        }
      ],
      FlutterA:[
        {
          name:'AgriEase',
          img:'farm',
          web_link:'https://github.com/thekiran2000/AgriEase',
          details:'An agriculture application which helps in several parameters such as weather, market values etc'
        },
        {
          name:"Chatter",
          img:'chat',
          web_link:'https://github.com/thekiran2000/Chatter_App',
          details:"A chatting app which includes chatting between friends and strangers"
        },
        {
          name:"ShopNest",
          img:'shop',
          web_link:'https://github.com/thekiran2000/ShopNest',
          details:"A Shopping app which having functionalities like amazon with panel for shop owners."
        },
      ],
      FlutterB:[
        {
          name:'CovidOmeter',
          img:'virus',
          web_link:'https://github.com/thekiran2000/CovidOmeter',
          details:'CovidOmeter app gives daily count of cases with  visual analysis and counts across several regions'
        },
        {
          name:"MovieReviews",
          img:'imdb',
          web_link:'https://github.com/thekiran2000/MovieReviews',
          details:"MovieReviews gives complete summary of movie with its IMDB ratings"
        },
        {
          name:"TenShorts",
          img:'news',
          web_link:'https://github.com/thekiran2000/TenShorts',
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
    }

  }

  public ProjectObject:any;
  public kkkk:any;



}
