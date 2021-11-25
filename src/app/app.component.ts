import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  public aboutShowFlag:any;
  public internShowFlag:any;

  public aboutClickedFunc(event:any){
    this.aboutShowFlag=event;
  }
  internClickedFunc(event:any){
    this.internShowFlag=event;
  }
}
