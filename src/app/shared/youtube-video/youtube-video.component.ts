import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrl: './youtube-video.component.scss'
})
export class YoutubeVideoComponent implements OnInit {
  @Input() width: number = 560;
  @Input() height: number = 315;
  @Input() url: string = "";
  public source!: SafeResourceUrl;

  constructor(private readonly sanitizer: DomSanitizer) {}
  
  public ngOnInit() {
    this.source = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
