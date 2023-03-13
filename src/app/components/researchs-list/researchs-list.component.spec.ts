import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchsListComponent } from './researchs-list.component';

describe('ResearchsListComponent', () => {
  let component: ResearchsListComponent;
  let fixture: ComponentFixture<ResearchsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
