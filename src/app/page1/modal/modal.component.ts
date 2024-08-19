import { Component, OnInit, input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonBackButton,IonButtons} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonButtons, IonBackButton],
})
export class ModalComponent  implements OnInit {
  data = input(0)

  constructor() { }

  ngOnInit() {}

}
