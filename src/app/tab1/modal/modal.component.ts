import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonNav, IonAccordion,IonItem,IonLabel,IonAccordionGroup,IonIcon,IonBadge,IonMenu,IonMenuButton,IonButtons, IonAvatar, IonRadio, IonList,IonCard, IonCardHeader, IonCardContent, IonCardTitle} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Importa CommonModule

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from  '@angular/common/http';

/* 4. Importe de la interfaz */
import { Data } from '../../interfaces/data';

/* 5. Importe del servicio */
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonNav,IonAccordion,IonItem,IonLabel,IonAccordionGroup,IonIcon,IonBadge,IonMenu,IonMenuButton,IonButtons,IonAvatar, IonRadio, IonList, IonCard, IonCardHeader, IonCardContent,IonCardTitle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProviderService],
})
export class ModalComponent {

  @Input() data: string = '';

  constructor(private modalController: ModalController, private dataProvider: ProviderService) { }
  
  dismissModal() {
    this.modalController.dismiss();
  }

  selectAnswer(answer: string) {
    console.log('Selected answer:', answer);
    
  }
swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }




  

  questions = {
    "preg": {
      "enunciado": "¿Cuánto es 2 + 2?",
      "opcion1": "8",
      "opcion2": "1",
      "opcion3": "3",
      "opcion4": "4",
      "respuesta": "4"
    },
    "preg2": {
      "enunciado": "Capital de Ecuador",
      "opcion1": "Guayaquil",
      "opcion2": "Quito",
      "opcion3": "Manta",
      "opcion4": "Loja",
      "respuesta": "Quito"
    }
  };

  questionList = Object.values(this.questions);

  selectedAnswers = Array(this.questionList.length).fill(null); // Inicializa con null para cada pregunta


  submitQuiz() {
    let score = 0;

    this.questionList.forEach((question, index) => {
      if (this.selectedAnswers[index] === question.respuesta) {
        score++;
      }
    });

    alert(`Tu puntuación es ${score} de ${this.questionList.length}`);
  
  }
}
