export function convertToEmbedUrl(youtubeUrl: string): string | null {
    const urlPattern = /^https:\/\/www\.youtube\.com\/watch\?v=([^&]+)/;

    const match = youtubeUrl.match(urlPattern);
    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
    }

    return null;
}