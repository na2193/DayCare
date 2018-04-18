import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit { 
  backgroundImage: any = '../assets/background_image.jpg';
  body_image1: any = '../assets/body_image1.png'; 
  body_image2: any = '../assets/body_image2.png';

  constructor() { }

  ngOnInit() {
  }
}
