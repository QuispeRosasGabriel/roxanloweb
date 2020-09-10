import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-gallery-piece",
  templateUrl: "./gallery-piece.component.html",
  styleUrls: ["./gallery-piece.component.scss"],
})
export class GalleryPieceComponent implements OnInit {
  @Input() public img: String;
  @Input() public desc: string;
  constructor() {}

  ngOnInit() {}

  public goDesc() {
    // window.location.href = this.desc;
    window.open(this.desc, "_blank");
  }
}
