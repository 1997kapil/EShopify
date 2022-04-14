import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensService } from '../service/Mens.service';

import { MensComponent } from './Mens.component';

fdescribe('MensComponent', () => {
  let component: MensComponent;
  let fixture: ComponentFixture<MensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MensComponent],
      providers: [
        { provide: MensService, useClass: MensService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The total number of products should be same as the ones being fetched from the Mens service', () => {
    let dataservice = TestBed.inject(MensService);
    expect(component.productList.length).toBe(dataservice.productList.length);
  });
});
