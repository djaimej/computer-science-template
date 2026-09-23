import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createStorageMock } from '@template/testing/local-storage-mock';
import { ContextService } from './context';
import { ETheme, EAccentColor } from '@template/models/enums';

describe('ContextService', () => {
  beforeEach(() => vi.stubGlobal('localStorage', createStorageMock()));
  afterEach(() => vi.unstubAllGlobals());

  const create = () => {
    TestBed.configureTestingModule({});
    return TestBed.inject(ContextService);
  };

  it('usa el contexto por defecto sin nada persistido', () => {
    const service = create();
    expect(service.context()).toEqual({ theme: ETheme.NEUTRAL, accentColor: EAccentColor.NEUTRO });
  });

  it('restaura el contexto persistido en el arranque', () => {
    localStorage.setItem('context', JSON.stringify({ theme: ETheme.DARK, accentColor: EAccentColor.BLUE }));
    const service = create();
    expect(service.theme()).toBe(ETheme.DARK);
    expect(service.accentColor()).toBe(EAccentColor.BLUE);
    expect(service.isDark()).toBe(true);
  });

  it('toggleTheme alterna entre neutral y dark', () => {
    const service = create();
    expect(service.theme()).toBe(ETheme.NEUTRAL);
    service.toggleTheme();
    expect(service.theme()).toBe(ETheme.DARK);
    service.toggleTheme();
    expect(service.theme()).toBe(ETheme.NEUTRAL);
  });

  it('setAccentColor cambia solo el acento, no el tema', () => {
    const service = create();
    service.setAccentColor(EAccentColor.PURPLE);
    expect(service.accentColor()).toBe(EAccentColor.PURPLE);
    expect(service.theme()).toBe(ETheme.NEUTRAL);
  });

  it('persiste el contexto cuando cambia', () => {
    const service = create();
    service.setTheme(ETheme.DARK);
    TestBed.inject(ApplicationRef).tick(); // vacía el effect de persistencia
    expect(JSON.parse(localStorage.getItem('context')!)).toEqual({
      theme: ETheme.DARK,
      accentColor: EAccentColor.NEUTRO,
    });
  });
});
