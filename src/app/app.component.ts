import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    Parse.initialize(
      'Gey1hEb0x5Rt69cQrDTlcZyugsPeeH2gSoIi9QhA', // Remplacez par votre Application ID
      'GzBPpYduWhYyEnVwrYuk4q8OWUDXd6gTmMI35l28 ' // Remplacez par votre JavaScript Key
    );
  }
}
