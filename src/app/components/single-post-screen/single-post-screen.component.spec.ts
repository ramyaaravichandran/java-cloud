import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostScreenComponent } from './single-post-screen.component';

describe('SinglePostScreenComponent', () => {
  let component: SinglePostScreenComponent;
  let fixture: ComponentFixture<SinglePostScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePostScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
