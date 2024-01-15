import { Component } from '@angular/core';

@Component({
  selector: 'app-moon',
  standalone: true,
  imports: [],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.scss'
})
export class MoonComponent {
  activeInfoId: string | null = null; 

  constructor(){
    document.body.style.backgroundImage = "url('assets/moon.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }

  toggleInfo(event: Event, infoId: string): void {
    const contentId: string = 'content' + infoId.slice(-1);
    const content: HTMLElement | null = document.getElementById(contentId);

    if (content) {
      if (this.activeInfoId && this.activeInfoId !== infoId) {
        const activeContentId: string = 'content' + this.activeInfoId.slice(-1);
        const activeContent: HTMLElement | null = document.getElementById(activeContentId);

        if (activeContent) {
          activeContent.style.display = 'none';
        }
      }

      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.activeInfoId = infoId; 
      } else {
        content.style.display = 'none';
        this.activeInfoId = null; 
      }
    }
  }
}
