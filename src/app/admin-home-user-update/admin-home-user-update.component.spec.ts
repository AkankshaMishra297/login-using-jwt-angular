import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeUserUpdateComponent } from './admin-home-user-update.component';

describe('AdminHomeUserUpdateComponent', () => {
  let component: AdminHomeUserUpdateComponent;
  let fixture: ComponentFixture<AdminHomeUserUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeUserUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
