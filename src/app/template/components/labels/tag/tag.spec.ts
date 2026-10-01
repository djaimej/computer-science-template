import { TestBed } from '@angular/core/testing';
import { Tag } from './tag';

describe('Tag', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [Tag] });
    return TestBed.createComponent(Tag);
  };

  it('se crea', () => {
    const f = create(); f.detectChanges();
    expect(f.componentInstance).toBeTruthy();
  });

  it('muestra el botón cerrar solo si dismissible', () => {
    const f = create();
    f.componentRef.setInput('dismissible', false);
    f.detectChanges();
    expect(f.nativeElement.querySelector('button')).toBeNull();
    f.componentRef.setInput('dismissible', true);
    f.detectChanges();
    expect(f.nativeElement.querySelector('button')).toBeTruthy();
  });

  it('el click en cerrar oculta el tag', () => {
    const f = create();
    f.componentRef.setInput('dismissible', true);
    f.detectChanges();
    (f.nativeElement.querySelector('button') as HTMLButtonElement).click();
    f.detectChanges();
    expect(f.nativeElement.querySelector('.tag')).toBeNull();
  });
});
