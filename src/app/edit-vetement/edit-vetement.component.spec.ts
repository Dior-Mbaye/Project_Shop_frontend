import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVetementComponent } from './edit-vetement.component';

describe('EditVetementComponent', () => {
  let component: EditVetementComponent;
  let fixture: ComponentFixture<EditVetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVetementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
