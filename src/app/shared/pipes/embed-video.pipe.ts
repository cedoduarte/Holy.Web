import { Pipe, PipeTransform } from "@angular/core";
import { convertToEmbedUrl } from "../utils/utils";

@Pipe({
    name: "embedVideo"
})
export class EmbedVideoPipe implements PipeTransform {
    transform(videoWatchUrl: string) {
        return convertToEmbedUrl(videoWatchUrl);
    }
}