import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { of } from 'rxjs';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';
import { Subtopic } from './subtopic';

describe('Subtopic', () => {
  const activatedRouteStub = {
    paramMap: of(convertToParamMap({ semester: '1', subject: '1', file: '1111' })),
  };

  const create = () => {
    TestBed.configureTestingModule({
      imports: [Subtopic],
      providers: [
        ...ICON_TEST_PROVIDERS,
        provideMarkdown(),
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
    });
    return TestBed.createComponent(Subtopic);
  };

  it('se crea', () => {
    const fixture = create();
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('arma el src del documento desde los params de la ruta', () => {
    const fixture = create();
    fixture.detectChanges();
    expect(fixture.componentInstance.src()).toBe('documents/semester-1/1/1111.md');
  });
});
