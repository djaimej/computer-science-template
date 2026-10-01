import { ButtonFloatingAction } from './button-floating-action';
import { TestBed } from '@angular/core/testing';

describe('ButtonFloatingAction', () => {
  const create = () => {
    TestBed.configureTestingModule({
      imports: [ButtonFloatingAction]
    });
    return TestBed.createComponent(ButtonFloatingAction);
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
