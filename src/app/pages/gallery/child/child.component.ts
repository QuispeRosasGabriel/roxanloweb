import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildComponent implements OnInit {
  public imgChild: string;
  public desc: string;

  constructor() {
    this.imgChild = "https://i.postimg.cc/26bzXs3q/ninos.jpg";
    this.desc =
      "https://docs.google.com/presentatio\nn/d/1qpJT5w4oQsSdAHCoxtdrlszvTTqXl2bHb4n\nKKYk0MVg/mobilepresent?slide=id.g139f32e65b_1_95";
  }

  ngOnInit() {}
}
