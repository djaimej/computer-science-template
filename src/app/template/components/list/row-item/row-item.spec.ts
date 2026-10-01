import { TestBed } from '@angular/core/testing';
import { RowItem } from './row-item';

describe('RowItem', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [RowItem] });
    return TestBed.createComponent(RowItem);
  };

  it('se crea', () => {
    const f = create(); f.detectChanges();
    expect(f.componentInstance).toBeTruthy();
  });

  it('renderiza label y description', () => {
    const f = create();
    f.componentRef.setInput('label', 'Título');
    f.componentRef.setInput('description', 'Detalle');
    f.detectChanges();
    expect(f.nativeElement.querySelector('.label').textContent).toContain('Título');
    expect(f.nativeElement.querySelector('.description').textContent).toContain('Detalle');
  });

  it('muestra el icono solo cuando hay icon', () => {
    const f = create();
    f.detectChanges();
    expect(f.nativeElement.querySelector('.row-icon')).toBeNull();
    f.componentRef.setInput('icon', { library: 'interface-interaction', file: 'check.svg' });
    f.detectChanges();
    expect(f.nativeElement.querySelector('.row-icon')).toBeTruthy();
  });

  it('emite onAction al hacer click en la acción', () => {
    const f = create();
    f.componentRef.setInput('action', 'edit');
    f.detectChanges();
    const spy = vi.fn();
    f.componentInstance.onAction.subscribe(spy);
    (f.nativeElement.querySelector('.action') as HTMLElement).click();
    expect(spy).toHaveBeenCalled();
  });
});
