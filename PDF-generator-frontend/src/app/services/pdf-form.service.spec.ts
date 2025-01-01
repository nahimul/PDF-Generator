import { TestBed } from '@angular/core/testing';

import { PdfFormService } from './pdf-form.service';

describe('PdfFormService', () => {
  let service: PdfFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
