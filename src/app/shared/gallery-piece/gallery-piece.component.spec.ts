import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPieceComponent } from './gallery-piece.component';

describe('GalleryPieceComponent', () => {
  let component: GalleryPieceComponent;
  let fixture: ComponentFixture<GalleryPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
