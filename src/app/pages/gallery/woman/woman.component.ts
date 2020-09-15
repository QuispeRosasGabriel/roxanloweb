import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-woman",
  templateUrl: "./woman.component.html",
  styleUrls: ["./woman.component.scss"],
})
export class WomanComponent implements OnInit {
  public imgWoman: string;
  public desc: string;
  constructor() {
    this.imgWoman = "https://i.postimg.cc/xCMfWdqF/slider-6.png";
    this.desc =
      "https://docs.google.com/present\nation/d/16qr8fXv\nCTmBOZpqBefUY\n4c7C-JlxkR_jE0Q82VR2mnc/e\ndit?usp=sharing";
  }

  ngOnInit() {}
}
