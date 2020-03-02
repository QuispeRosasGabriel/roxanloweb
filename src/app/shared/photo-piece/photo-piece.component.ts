import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-piece',
  templateUrl: './photo-piece.component.html',
  styleUrls: ['./photo-piece.component.scss']
})
export class PhotoPieceComponent implements OnInit {
  @Input() imagePhoto: String;
  @Input() description: String;
  constructor() { }

  ngOnInit() {
  }

}
