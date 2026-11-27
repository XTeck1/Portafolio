import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TechnologiesComponent } from './sections/technologies/technologies.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    TechnologiesComponent,
    AboutComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit, OnDestroy {
  protected title = 'portafolio';
  currentYear = new Date().getFullYear();

  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    if (CSS.supports('scroll-target-group', 'auto')) {
      // Native scrollspy: :target-current handles the visual state, mirror it for AT.
      this.syncAriaCurrent();
      document.addEventListener('scrollend', this.syncAriaCurrent);
    } else {
      this.observeSections();
    }
  }

  ngOnDestroy() {
    document.removeEventListener('scrollend', this.syncAriaCurrent);
    this.observer?.disconnect();
  }

  private readonly syncAriaCurrent = () => {
    const current = document.querySelector('.nav-links a:target-current');
    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.setAttribute('aria-current', link === current ? 'true' : 'false');
    });
  };

  /**
   * The back-to-top control hides itself at the top of the page via
   * scroll-state queries. If focus was on it when it disappeared (e.g. the
   * user pressed Home), move focus to the top section instead of dropping
   * it on <body>. No-op in browsers where the button never hides.
   */
  onBackToTopFocusOut(event: FocusEvent): void {
    const button = event.currentTarget as HTMLElement | null;
    if (
      !button ||
      event.relatedTarget ||
      getComputedStyle(button).visibility !== 'hidden'
    ) {
      return;
    }
    document.querySelector<HTMLElement>('#inicio')?.focus();
  }

  /** Fallback for browsers without scroll-target-group (Firefox, Safari). */
  private observeSections() {
    const links = Array.from(document.querySelectorAll('.nav-links a'));
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute('id');
          links.forEach((link) => {
            const active = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('target-current', active);
            link.setAttribute('aria-current', active ? 'true' : 'false');
          });
        }
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    document
      .querySelectorAll('section[id]')
      .forEach((section) => this.observer!.observe(section));
  }
}
