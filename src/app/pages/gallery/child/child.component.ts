import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildComponent implements OnInit {
  public imgChild: string;
  constructor() {
    this.imgChild = "https://i.postimg.cc/26bzXs3q/ninos.jpg";
  }

  ngOnInit() {}
}
