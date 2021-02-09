import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementRowComponent } from './announcement-row.component';

describe('AnnouncementRowComponent', () => {
  let component: AnnouncementRowComponent;
  let fixture: ComponentFixture<AnnouncementRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
