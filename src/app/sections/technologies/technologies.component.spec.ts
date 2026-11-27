import { TestBed } from '@angular/core/testing';
import { TechnologiesComponent } from './technologies.component';

describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should group the icons into frontend, backend and tools', () => {
    expect(component.tecnologiasFrontend.length).toBe(7);
    expect(component.tecnologiasBackend.length).toBe(4);
    expect(component.tecnologiasHerramientas.length).toBe(2);
  });

  it('should render one image per technology, each with an alt text', () => {
    const images = (fixture.nativeElement as HTMLElement).querySelectorAll('img');
    expect(images.length).toBe(13);

    const alts = Array.from(images).map((img) => img.getAttribute('alt'));
    expect(alts).toContain('Angular');
    expect(alts).toContain('Spring Boot');
    expect(alts).toContain('MySQL');
    expect(alts).toContain('Git');
    expect(alts).toContain('Jira');
  });

  it('should point every icon to an svg served from public/icons', () => {
    const iconos = [
      ...component.tecnologiasFrontend,
      ...component.tecnologiasBackend,
      ...component.tecnologiasHerramientas,
    ];
    for (const icono of iconos) {
      expect(icono.archivo).toMatch(/^icons\/[a-z0-9]+\.svg$/);
    }
  });
});
