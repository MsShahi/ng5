import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntTemplatingExampleComponent } from './int-templating-example.component';

describe('IntTemplatingExampleComponent', () => {
  let component: IntTemplatingExampleComponent;
  let fixture: ComponentFixture<IntTemplatingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntTemplatingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntTemplatingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
