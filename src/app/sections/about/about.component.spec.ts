import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the skills list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#sobre-mi')).toBeTruthy();
    const skills = compiled.querySelectorAll('#sobre-mi span');
    expect(skills.length).toBe(component.habilidades.length);
    expect(compiled.textContent).toContain('Angular');
  });
});
