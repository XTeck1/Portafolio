import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(svg: string, color?: string, size: string = 'w-5 h-5'): SafeHtml {
    if (!svg) return '';
    let modified = svg;
    if (!modified.includes('width=')) {
      modified = modified.replace('<svg', `<svg class="${size}"`);
    }
    if (color) {
      modified = modified.replace('<path', `<path fill="${color}"`);
    }
    return this.sanitizer.bypassSecurityTrustHtml(modified);
  }
}
