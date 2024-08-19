import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonBackButton,IonButtons} from '@ionic/angular/standalone';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonButtons, IonBackButton],
})
export class MainComponent  implements OnInit {
  
  modal = ModalComponent

  constructor() { }

  ngOnInit() {}

}
