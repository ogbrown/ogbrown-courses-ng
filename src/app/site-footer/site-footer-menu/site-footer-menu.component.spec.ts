import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteFooterMenuComponent } from './site-footer-menu.component';

describe('SiteFooterMenuComponent', () => {
  let component: SiteFooterMenuComponent;
  let fixture: ComponentFixture<SiteFooterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteFooterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteFooterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
