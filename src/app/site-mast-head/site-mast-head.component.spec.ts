import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMastHeadComponent } from './site-mast-head.component';

describe('SiteMastHeadComponent', () => {
  let component: SiteMastHeadComponent;
  let fixture: ComponentFixture<SiteMastHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteMastHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMastHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
