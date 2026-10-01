import { TestBed } from '@angular/core/testing';
import { Toast } from './toast';

describe('Toast', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [Toast] });
    return TestBed.createComponent(Toast);
  };

  it('se crea', () => {
    const f = create(); f.detectChanges();
    expect(f.componentInstance).toBeTruthy();
  });

  it('renderiza mensaje y color', () => {
    const f = create();
    f.componentRef.setInput('message', 'Guardado');
    f.componentRef.setInput('color', 'white');
    f.detectChanges();
    const toast = f.nativeElement.querySelector('.toast') as HTMLElement;
    expect(toast.classList).toContain('white');
    expect(toast.textContent).toContain('Guardado');
  });

  it('emite dismissed al hacer click en cerrar', () => {
    const f = create();
    f.detectChanges();
    const spy = vi.fn();
    f.componentInstance.dismissed.subscribe(spy);
    (f.nativeElement.querySelector('.close') as SVGElement).dispatchEvent(new MouseEvent('click'));
    expect(spy).toHaveBeenCalled();
  });
});
