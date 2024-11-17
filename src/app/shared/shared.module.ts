import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { EmbedVideoPipe } from './pipes/embed-video.pipe';

const components = [
  YoutubeVideoComponent,
  VideoCardComponent,
  EmbedVideoPipe
];

@NgModule({
  declarations: [
    ...components,    
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
