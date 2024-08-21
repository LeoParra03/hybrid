import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonNav, IonAccordion,IonItem,IonLabel,IonAccordionGroup,IonIcon,IonBadge,IonMenu,IonMenuButton,IonButtons, IonAvatar, IonRadio, IonList} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Importa CommonModule

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonNav,IonAccordion,IonItem,IonLabel,IonAccordionGroup,IonIcon,IonBadge,IonMenu,IonMenuButton,IonButtons,IonAvatar, IonRadio, IonList],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ModalComponent {

  @Input() data: string = '';

  constructor(private modalController: ModalController) { }
  
  dismissModal() {
    this.modalController.dismiss();
  }

  selectAnswer(answer: string) {
    console.log('Selected answer:', answer);
    // Aquí puedes agregar lógica para manejar la respuesta seleccionada
  }
swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

}
