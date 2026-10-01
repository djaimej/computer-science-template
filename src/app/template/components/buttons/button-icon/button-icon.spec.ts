import { TestBed } from '@angular/core/testing';
import { ButtonIcon } from './button-icon';

describe('ButtonIcon', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [ButtonIcon] });
    return TestBed.createComponent(ButtonIcon);
  };

  it('emits clicked when enabled', () => {
    const fixture = create();
    fixture.detectChanges();
    const seen: Event[] = [];
    fixture.componentInstance.clicked.subscribe((e) => seen.push(e));
    fixture.nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(seen).toHaveLength(1);
  });

  it('does not emit clicked when disabled', () => {
    const fixture = create();
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const seen: Event[] = [];
    fixture.componentInstance.clicked.subscribe((e) => seen.push(e));
    fixture.nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(seen).toHaveLength(0);
  });
});
