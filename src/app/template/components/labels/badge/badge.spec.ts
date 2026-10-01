import { TestBed } from '@angular/core/testing';
import { Badge } from './badge';

describe('Badge', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [Badge] });
    return TestBed.createComponent(Badge);
  };

  it('se crea', () => {
    const f = create(); f.detectChanges();
    expect(f.componentInstance).toBeTruthy();
  });

  it('renderiza el texto y la clase de tipo', () => {
    const f = create();
    f.componentRef.setInput('text', 'Food');
    f.componentRef.setInput('type', 'black');
    f.detectChanges();
    const badge = f.nativeElement.querySelector('.badge') as HTMLElement;
    expect(badge.classList).toContain('black');
    expect(badge.textContent).toContain('Food');
  });

  it('el click en cerrar oculta el badge', () => {
    const f = create();
    f.detectChanges();
    expect(f.nativeElement.querySelector('.badge')).toBeTruthy();
    (f.nativeElement.querySelector('.badge button') as SVGElement).dispatchEvent(new MouseEvent('click'));
    f.detectChanges();
    expect(f.nativeElement.querySelector('.badge')).toBeNull();
  });
});
