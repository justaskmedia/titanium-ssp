import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAPIComponent } from './generate-api.component';

describe('GenerateAPIComponent', () => {
  let component: GenerateAPIComponent;
  let fixture: ComponentFixture<GenerateAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
