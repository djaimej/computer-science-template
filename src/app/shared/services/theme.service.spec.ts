import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ETheme } from '@models/enums';
import { createStorageMock } from '@shared/testing/local-storage-mock';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => vi.stubGlobal('localStorage', createStorageMock()));
  afterEach(() => vi.unstubAllGlobals());

  const create = () => {
    TestBed.configureTestingModule({});
    return TestBed.inject(ThemeService);
  };

  it('toggles between light and dark', () => {
    const service = create();
    const initial = service.current();
    service.toggle();
    expect(service.current()).not.toBe(initial);
    service.toggle();
    expect(service.current()).toBe(initial);
  });

  it('reflects dark state via isDark()', () => {
    const service = create();
    service.set(ETheme.DARK);
    expect(service.isDark()).toBe(true);
    service.setDark(false);
    expect(service.isDark()).toBe(false);
  });

  it('restores the persisted theme on init', () => {
    localStorage.setItem('paper-theme', ETheme.DARK);
    expect(create().current()).toBe(ETheme.DARK);
  });

  it('persists the theme when it changes', () => {
    const service = create();
    service.set(ETheme.DARK);
    TestBed.inject(ApplicationRef).tick(); // vacía el effect de persistencia
    expect(localStorage.getItem('paper-theme')).toBe(ETheme.DARK);
  });
});
