import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDesignsComponent } from './about-designs.component';

describe('AboutDesignsComponent', () => {
  let component: AboutDesignsComponent;
  let fixture: ComponentFixture<AboutDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
