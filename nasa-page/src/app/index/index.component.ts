import { Component } from '@angular/core';

declare function updateTime(): any;

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  ngOnInit(): void {
    updateTime();
  }
}
