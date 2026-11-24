import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a mailto link with the configured email', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a') as HTMLAnchorElement;
    expect(link.getAttribute('href')).toBe(`mailto:${component.email}`);
  });
});
