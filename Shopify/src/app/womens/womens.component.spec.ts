import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WomensService } from '../service/Womens.service';

import { WomensComponent } from './Womens.component';

fdescribe('WomensComponent', () => {
  let component: WomensComponent;
  let fixture: ComponentFixture<WomensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomensComponent],
      providers: [
        { provide: WomensService, useClass: WomensService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The total number of products should be same as the ones being fetched from the Womens service', () => {
    let dataservice = TestBed.inject(WomensService);
    expect(component.productList.length).toBe(dataservice.productList.length);
  });
});
