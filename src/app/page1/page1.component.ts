import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonBackButton,IonButtons} from '@ionic/angular/standalone';

@Component({
  selector: 'app-page1',
  templateUrl: 'page1.component.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton,IonBackButton,IonButtons],
})
export class PageOneComponent {
    
}

