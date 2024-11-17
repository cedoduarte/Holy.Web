import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrl: './youtube-video.component.scss'
})
export class YoutubeVideoComponent implements OnInit {
  @Input() embedUrl: string = "";
  public source!: SafeResourceUrl;

  public constructor(private readonly sanitizer: DomSanitizer) {}

  public ngOnInit() {
    this.source = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedUrl);
  }
}
