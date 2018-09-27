import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickMenuProfileComponent } from './quick-menu-profile.component';

describe('QuickMenuProfileComponent', () => {
  let component: QuickMenuProfileComponent;
  let fixture: ComponentFixture<QuickMenuProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickMenuProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickMenuProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
