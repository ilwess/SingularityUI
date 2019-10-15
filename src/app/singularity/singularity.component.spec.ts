import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularityComponent } from './singularity.component';

describe('SingularityComponent', () => {
  let component: SingularityComponent;
  let fixture: ComponentFixture<SingularityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingularityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
