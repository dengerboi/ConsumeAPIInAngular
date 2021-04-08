import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProjByIDComponent } from './select-proj-by-id.component';

describe('SelectProjByIDComponent', () => {
  let component: SelectProjByIDComponent;
  let fixture: ComponentFixture<SelectProjByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProjByIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProjByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
