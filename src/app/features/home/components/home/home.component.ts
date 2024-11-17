import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public embedUrl: string = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  public constructor() {
    
  }
}
