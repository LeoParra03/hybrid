import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonNav, IonAccordion,IonItem,IonLabel,IonAccordionGroup,IonIcon,IonBadge,IonMenu,IonMenuButton,IonButtons, IonAvatar} from '@ionic/angular/standalone';
import { ModalComponent } from '../modal/modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonNav,IonAccordion,IonItem,IonLabel,IonAccordionGroup,IonIcon,IonBadge,IonMenu,IonMenuButton,IonButtons,IonAvatar],
  providers: [ModalController]
})
export class MainComponent  implements OnInit {
 
 
  constructor(private modalController: ModalController) {}

  async openModal(content: string) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { data: content }
    });
    return await modal.present();
  }



  ngOnInit() {}

}