import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  public aboutClickedFunc(){
    this.aboutClicked.emit(true);
    this.navflagAbout=true;
    this.navflagHome=false;
  }

  // public internClickedFunc(){
  //   this.internClicked.emit(true);
  //   this.navflagAbout=false;
  //   this.navflagHome=true;
  // }

  public homeClickedFunc(){
    this.aboutClicked.emit(false);
    this.navflagAbout=false;
    this.navflagHome=true;
  }

  

}
