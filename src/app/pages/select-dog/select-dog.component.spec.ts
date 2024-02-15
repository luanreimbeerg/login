import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDogComponent } from './select-dog.component';

describe('SelectDogComponent', () => {
  let component: SelectDogComponent;
  let fixture: ComponentFixture<SelectDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
