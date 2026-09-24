import { TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@template/testing/icon-testing';
import { Image } from './image';

describe('Image', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [Image], providers: [...ICON_TEST_PROVIDERS] });
    return TestBed.createComponent(Image);
  };

  it('muestra el placeholder cuando no hay src', () => {
    const fixture = create();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img')).toBeNull();
    expect(fixture.nativeElement.querySelector('svg')).toBeTruthy();
  });

  it('muestra la imagen cuando se fija src', () => {
    const fixture = create();
    fixture.componentRef.setInput('src', 'photo.jpg');
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement | null;
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('photo.jpg');
    expect(fixture.nativeElement.querySelector('svg')).toBeNull();
  });

  it('fuerza ratio 1 en círculos e ignora el ratio recibido', () => {
    const fixture = create();
    fixture.componentRef.setInput('type', 'circle');
    fixture.componentRef.setInput('ratio', 2);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.image') as HTMLElement;
    expect(el.classList).toContain('circle');
    // aspect-ratio no es fiable en el DOM de test; validamos el cálculo real.
    expect((fixture.componentInstance as any).effectiveRatio()).toBe(1);
  });

  it('respeta el ratio recibido en cuadrados', () => {
    const fixture = create();
    fixture.componentRef.setInput('type', 'square');
    fixture.componentRef.setInput('ratio', 2);
    fixture.detectChanges();
    expect((fixture.componentInstance as any).effectiveRatio()).toBe(2);
  });
});
