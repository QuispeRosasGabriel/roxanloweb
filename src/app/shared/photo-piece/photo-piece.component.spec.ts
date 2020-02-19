import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPieceComponent } from './photo-piece.component';

describe('PhotoPieceComponent', () => {
  let component: PhotoPieceComponent;
  let fixture: ComponentFixture<PhotoPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
