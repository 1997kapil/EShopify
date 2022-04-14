import { TestBed } from '@angular/core/testing';

import { MensService } from './Mens.service';

fdescribe('MensService', () => {
  let service: MensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Number of products in the Mens service', () => {
    expect(service.productList.length).toEqual(5);
  });
});
