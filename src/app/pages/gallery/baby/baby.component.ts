import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baby",
  templateUrl: "./baby.component.html",
  styleUrls: ["./baby.component.scss"],
})
export class BabyComponent implements OnInit {
  public imgBaby: string;
  public desc: string;

  constructor() {
    this.imgBaby = "https://i.postimg.cc/FsRwNyhv/bbs.png";
    this.desc =
      "https://docs.google.com/presentation/d/\n1Cx4x1FJ2nByN7b9LAeQkZpVG15GDDvUrgvnR-Ym7FbE/edit?ts=5f5160af#slide=id.g18f2acd6d6_0_92";
  }

  ngOnInit() {}
}
