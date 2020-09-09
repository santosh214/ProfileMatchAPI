import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputName=" ";
  public imgurl="./assets/images/img.png";
  public src="https://joeschmoe.io/api/v1/";
  public nameInput="";
public change;
  fun(){
 this.imgurl=this.src+this.inputName;
} 
}
