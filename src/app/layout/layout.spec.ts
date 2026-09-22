import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';
import { ComputerScienceService } from '@services/computer-science';
import { Layout } from './layout';

describe('Layout', () => {
  const computerScienceStub: Partial<ComputerScienceService> = {
    getSearchText: () => of(null as unknown as string),
    getAllSubtopicPaths: () => [],
    search: () => { },
    clearSearch: () => { },
  };

  const create = () => {
    TestBed.configureTestingModule({
      imports: [Layout],
      providers: [
        ...ICON_TEST_PROVIDERS,
        provideRouter([]),
        { provide: ComputerScienceService, useValue: computerScienceStub },
      ],
    });
    return TestBed.createComponent(Layout);
  };

  it('se crea', () => {
    const fixture = create();
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
