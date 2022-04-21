import { TestBed } from '@angular/core/testing';

import { WomensService } from './Womens.service';

fdescribe('WomensService', () => {
  let service: WomensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Number of products in the Womens service', () => {
    expect(service.productList.length).toEqual(5);
  });
});
