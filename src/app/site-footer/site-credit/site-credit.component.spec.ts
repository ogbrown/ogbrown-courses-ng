import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCreditComponent } from './site-credit.component';

describe('SiteCreditComponent', () => {
  let component: SiteCreditComponent;
  let fixture: ComponentFixture<SiteCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
