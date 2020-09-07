import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-the-menu",
  templateUrl: "./the-menu.component.html",
  styleUrls: ["./the-menu.component.scss"],
})
export class TheMenuComponent implements OnInit {
  public activeLang = "en";
  navbarOpen = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {}

  public cambiarLenguaje(lang: any) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
