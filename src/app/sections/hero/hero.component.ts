import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SafeHtmlPipe } from '../../safe-html.pipe';
import { siFiles, siGithub } from 'simple-icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit {
  folderIcon = siFiles;
  githubIcon = siGithub;

  // TODO: reemplazar con tu nombre real si difiere
  nombre = 'Daniel';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const gsap = (window as any).gsap;
    if (!gsap) return;
    // Respect reduced motion: keep the static title, skip the word animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.splitHeroTitle();

    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .from('.hero-word-inner', {
        yPercent: 120,
        duration: 0.9,
        stagger: 0.09,
      })
      .from('.hero-subtitle', { autoAlpha: 0, y: 24, duration: 0.7 }, '-=0.5')
      .from(
        '.hero-action',
        { autoAlpha: 0, y: 18, duration: 0.6, stagger: 0.08 },
        '-=0.4'
      );
  }

  private splitHeroTitle() {
    const title = this.el.nativeElement.querySelector(
      '.hero-title'
    ) as HTMLElement | null;
    if (!title || !title.textContent) return;

    const words = title.textContent.trim().split(/\s+/);
    title.innerHTML = words
      .map(
        (word) =>
          `<span class="hero-word"><span class="hero-word-inner">${word}</span></span>`
      )
      .join(' ');
  }
}
