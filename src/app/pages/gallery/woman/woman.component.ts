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
    this.imgWoman = "https://i.postimg.cc/PJLWPRC1/GOLDEN-HEART-TUNIC.jpg";
    this.desc =
      "https://docs.google.com/presentation/d/1qpJT5w4\noQsSdAHCoxtd\nrlszvTTqXl2bHb4nKKYk0MVg\n/mobilepresent?s\nlide=id.g2bbdf077bf_0_20";
  }

  ngOnInit() {}
}
