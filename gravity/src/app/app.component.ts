import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'gravity';
  fG:string;
  mass1:number;
  mass2: number;
  radius: number;

  formatLabel1(value1: number | null) {
    if (!value1||value1==0) {
      return 0;
    }

    if (value1 >= 1000) {
      return Math.round(value1 / 1000) + 'k';
    }
    return value1;
  }
  formatLabel2(value2: number | null) {
    if (!value2) {
      return 0;
    }

    if (value2 >= 1000) {
      return Math.round(value2 / 1000) + 'k';
    }

    return value2;
  }

  onMass1Change(event: any) {
    this.mass1 = event.value;
  }
  onMass2Change(event: any) {
    this.mass2 = event.value;
   }
   onSubmit(){
    let m1 = this.mass1;
    console.log(m1);
    let m2 = this.mass2;
    console.log(m2);
    let radius2 = Math.pow(this.radius, 2);
    let num;
    let G:number = 0.00000000006674;
    num = G * m1 * m2;
    this.fG = ((num)/(radius2)).toFixed(10);
    console.log(this.fG);
    return this.fG;
    
    
   }

   constructor(){
     let m1 = this.mass1;
     let m2 = this.mass2;
     let radius = this.radius;
     

   }
   

  
}
