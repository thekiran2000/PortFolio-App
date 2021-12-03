import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/model/blog.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  @Output() aboutClicked = new EventEmitter<any>();
  @Output() internClicked = new EventEmitter<any>();

  public navflagHome:boolean=true;
  public navflagAbout:boolean=false;
  public navflagBlog:boolean=false;

  blogs:any;
  
  constructor(private blogserve:BlogsService) { }

  ngOnInit(): void {
  }

  public createPolicy(){
    this.blogserve.createPolicy();
  }

  public aboutClickedFunc(){
    this.aboutClicked.emit(true);
    this.internClicked.emit(false);
    this.navflagAbout=true;
    this.navflagHome=false;
    this.navflagBlog=false;
  }

  public internClickedFunc(){
    this.internClicked.emit(true);
    this.navflagAbout=false;
    this.navflagHome=false;
    this.navflagBlog=true;
  }

  public homeClickedFunc(){
    this.aboutClicked.emit(false);
    this.internClicked.emit(false);
    this.navflagAbout=false;
    this.navflagHome=true;
    this.navflagBlog=false;
  }

  

}
