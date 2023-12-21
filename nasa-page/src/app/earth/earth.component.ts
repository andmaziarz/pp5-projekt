import { Component } from '@angular/core';

@Component({
  selector: 'app-earth',
  standalone: true,
  imports: [],
  templateUrl: './earth.component.html',
  styleUrl: './earth.component.scss'
})
export class EarthComponent {
  constructor(){
    document.body.style.backgroundImage = "url('assets/earth.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }
  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }
}
