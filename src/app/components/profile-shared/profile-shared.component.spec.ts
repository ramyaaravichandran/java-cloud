import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSharedComponent } from './profile-shared.component';

describe('ProfileSharedComponent', () => {
  let component: ProfileSharedComponent;
  let fixture: ComponentFixture<ProfileSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
