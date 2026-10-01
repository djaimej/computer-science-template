import { TestBed } from '@angular/core/testing';
import { RowMessage } from './row-message';

describe('RowMessage', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [RowMessage] });
    return TestBed.createComponent(RowMessage);
  };

  it('se crea', () => {
    const f = create(); f.detectChanges();
    expect(f.componentInstance).toBeTruthy();
  });

  it('renderiza label, description y date', () => {
    const f = create();
    f.componentRef.setInput('label', 'Mensaje');
    f.componentRef.setInput('description', 'Detalle');
    f.componentRef.setInput('date', 'hoy');
    f.detectChanges();
    expect(f.nativeElement.querySelector('.label').textContent).toContain('Mensaje');
    expect(f.nativeElement.querySelector('.description').textContent).toContain('Detalle');
    expect(f.nativeElement.querySelector('.date').textContent).toContain('hoy');
  });

  it('muestra la imagen cuando hay imageSrc, placeholder si no', () => {
    const f = create();
    f.detectChanges();
    expect(f.nativeElement.querySelector('.icon img')).toBeNull();
    expect(f.nativeElement.querySelector('.icon svg')).toBeTruthy();

    f.componentRef.setInput('imageSrc', 'foto.png');
    f.detectChanges();
    const img = f.nativeElement.querySelector('.icon img') as HTMLImageElement | null;
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('foto.png');
    expect(f.nativeElement.querySelector('.icon svg')).toBeNull();
  });

  it('emite onAction al hacer click en la fila', () => {
    const f = create();
    f.detectChanges();
    const spy = vi.fn();
    f.componentInstance.onAction.subscribe(spy);
    (f.nativeElement.querySelector('.message-row') as HTMLElement).click();
    expect(spy).toHaveBeenCalled();
  });
});
