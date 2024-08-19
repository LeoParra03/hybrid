import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonNav, IonNavLink} from '@ionic/angular/standalone';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonNav, IonNavLink]
})
export class Page1Page implements OnInit {
  component = MainComponent

  constructor() { }

  ngOnInit() {
  }

}
