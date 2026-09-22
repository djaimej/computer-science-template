import { TestBed } from '@angular/core/testing';
import { Button } from './button';

describe('Button', () => {
  it('emits clicked when enabled', () => {
    const fixture = TestBed.createComponent(Button);
    fixture.detectChanges();
    const seen: Event[] = [];
    fixture.componentInstance.clicked.subscribe((e) => seen.push(e));

    fixture.nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(seen).toHaveLength(1);
  });

  it('does not emit clicked when disabled', () => {
    const fixture = TestBed.createComponent(Button);
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const seen: Event[] = [];
    fixture.componentInstance.clicked.subscribe((e) => seen.push(e));

    fixture.nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(seen).toHaveLength(0);
  });
});
