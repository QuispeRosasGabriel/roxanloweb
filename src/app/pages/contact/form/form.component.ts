import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  paises: any[] = [];

  constructor(private _countriesService: CountriesService) { }

  ngOnInit() {
    this.getCountries();
  }
  getCountries() {
    this._countriesService
      .getData().subscribe((data: any) =>
        this.paises = data
      );
    console.log(this.paises);
    console.log(
      "Desarrollado Por Gabriel Quispe Rosas"
    );
  }

}
