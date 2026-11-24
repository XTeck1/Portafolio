import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the navigation with fragment links to all sections', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav).toBeTruthy();
    const expected = [
      ['#experiencia', 'Experiencia'],
      ['#proyectos', 'Proyectos'],
      ['#tecnologias', 'Tecnologías'],
      ['#sobre-mi', 'Sobre mí'],
      ['#contacto', 'Contacto'],
    ];
    for (const [href, label] of expected) {
      const link = nav?.querySelector(`a[href="${href}"]`);
      expect(link).withContext(`link ${href}`).toBeTruthy();
      expect(link?.textContent).toContain(label);
    }
  });

  it('should make section targets focusable after anchor navigation', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    for (const id of ['inicio', 'experiencia', 'proyectos', 'tecnologias', 'sobre-mi', 'contacto']) {
      expect(compiled.querySelector(`#${id}`)).withContext(`section #${id}`).toBeTruthy();
      expect(compiled.querySelector(`#${id}`)?.getAttribute('tabindex')).toBe('-1');
    }
  });

  it('should render the footer with the current year', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const year = new Date().getFullYear().toString();
    expect(compiled.querySelector('footer')?.textContent).toContain(year);
  });
});
