import { TestBed } from '@angular/core/testing';

import { ClothesService } from './Clothes.service';

fdescribe('ClothesService', () => {
  let service: ClothesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Number of products in the service', () => {
    expect(service.productList.length).toEqual(10);
  });
});
