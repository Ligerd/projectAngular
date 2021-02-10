import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAnnouncementComponent } from './favorite-announcement.component';

describe('FavoriteAnnouncementComponent', () => {
  let component: FavoriteAnnouncementComponent;
  let fixture: ComponentFixture<FavoriteAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
