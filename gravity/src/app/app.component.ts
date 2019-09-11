import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import * as $ from 'jquery';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  LineChart = [];
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

   ngOnInit(){
    $( document ).ready(function() {
      var c = <HTMLCanvasElement> document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
      
    });
   
    
 
   }



   
    
   }

   
   

  

