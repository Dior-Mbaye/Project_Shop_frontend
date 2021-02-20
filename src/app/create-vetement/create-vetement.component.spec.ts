import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVetementComponent } from './create-vetement.component';

describe('CreateVetementComponent', () => {
  let component: CreateVetementComponent;
  let fixture: ComponentFixture<CreateVetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVetementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
