import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accesories",
  templateUrl: "./accesories.component.html",
  styleUrls: ["./accesories.component.scss"],
})
export class AccesoriesComponent implements OnInit {
  public imgAccesories: string;
  public desc: string;
  constructor() {
    this.imgAccesories = "https://i.postimg.cc/9XgFGNdc/PORTA-LAPTOP-RED.jpg";
    this.desc =
      "https://docs.google.com/presentation/d/1KYyvGGNq6SAzZlfniI82kcuoperNnpogybJ9Swq47to/edit?ts=5f515fb4#slide=id.g6566e6322c_2_80";
  }

  ngOnInit() {}
}
