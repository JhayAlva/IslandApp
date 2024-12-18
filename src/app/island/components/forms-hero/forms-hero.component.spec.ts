import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsHeroComponent } from './forms-hero.component';

describe('FormsHeroComponent', () => {
  let component: FormsHeroComponent;
  let fixture: ComponentFixture<FormsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
