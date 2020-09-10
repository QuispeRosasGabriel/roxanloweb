import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-woman",
  templateUrl: "./woman.component.html",
  styleUrls: ["./woman.component.scss"],
})
export class WomanComponent implements OnInit {
  public imgWoman: string;
  constructor() {
    this.imgWoman = "https://i.postimg.cc/PJLWPRC1/GOLDEN-HEART-TUNIC.jpg";
  }

  ngOnInit() {}
}
