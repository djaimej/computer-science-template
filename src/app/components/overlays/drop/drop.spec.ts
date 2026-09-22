import { TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';
import { Drop } from './drop';

describe('Drop', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [Drop], providers: [...ICON_TEST_PROVIDERS] });
    return TestBed.createComponent(Drop);
  };

  it('se crea', () => {
    const fixture = create();
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renderiza el contenido solo cuando está abierto', () => {
    const fixture = create();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('dialog')).toBeNull();

    fixture.componentInstance.open();
    fixture.detectChanges();
    expect(fixture.componentInstance.render()).toBe(true);
    expect(fixture.nativeElement.querySelector('dialog')).toBeTruthy();

    fixture.componentInstance.open(); // toggle → cierra
    fixture.detectChanges();
    expect(fixture.componentInstance.render()).toBe(false);
    expect(fixture.nativeElement.querySelector('dialog')).toBeNull();
  });
});
