import { TestBed } from '@angular/core/testing';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SafeHtmlPipe] });
    pipe = TestBed.inject(SafeHtmlPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add the size class when the svg has no width attribute', () => {
    const result = String(pipe.transform('<svg><path/></svg>', undefined, 'w-5 h-5'));
    expect(result).toContain('class="w-5 h-5"');
  });

  it('should apply the color to the path when provided', () => {
    const result = String(pipe.transform('<svg><path/></svg>', 'ffffff'));
    expect(result).toContain('fill="ffffff"');
  });

  it('should return an empty string for empty input', () => {
    expect(String(pipe.transform(''))).toBe('');
  });
});
