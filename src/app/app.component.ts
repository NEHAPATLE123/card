
import { Component } from '@angular/core';
import { Ipost, Istd } from './shared/model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'card';

  postInfo: Array<Ipost> = [
    {
      title: "Angular 15 Sandalone Components",
      body: "Angular 15 has new features Snadalone Components"
    },
    {
      title: "Angular 15 Sandalone HttpModule",
      body: "Angular 15 has new features Snadalone HttpModules"
    },

    {
      title: "Angular 16  Signals",
      body: "Angular 16 has new features Singnals alternative for Rxjs Subject"
    },
]

 stdArray : Array<Istd> = [
  {
    fname: "jhon",
    lname: "doe",
    email: "jhon@12314",
    contact: 12345
  },
]

 fnameValue! : string;
 lnameValue! : string;
 emailValue! : string;
 contactvallue! : string;

 onAddStudent(){
  //  console.log(this.fnameValue);
   let obj : Istd = {
    fname : this.fnameValue,
    lname: this.lnameValue,
    email: this.emailValue,
    contact: +this.contactvallue
   }
   console.log(obj);
   this.stdArray.push(obj)

   this.fnameValue = "",
   this.lnameValue = "",
   this.emailValue = "",
   this.contactvallue = ""
 }
}
