import { Component } from '@angular/core';

@Component({
  selector: 'app-mars',
  standalone: true,
  imports: [],
  templateUrl: './mars.component.html',
  styleUrl: './mars.component.scss'
})
export class MarsComponent {
  constructor(){
    document.body.style.backgroundImage = "url('assets/mars.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }
  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }

}
