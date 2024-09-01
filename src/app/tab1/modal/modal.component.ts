import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertController, ToastController, IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonNav, IonAccordion, IonItem, IonLabel, IonAccordionGroup, IonIcon, IonBadge, IonMenu, IonMenuButton, IonButtons, IonAvatar, IonRadio, IonList, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Data } from '../../interfaces/data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonNavLink,
    IonButton,
    IonNav,
    IonAccordion,
    IonItem,
    IonLabel,
    IonAccordionGroup,
    IonIcon,
    IonBadge,
    IonMenu,
    IonMenuButton,
    IonButtons,
    IonAvatar,
    IonRadio,
    IonList,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonInput
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProviderService],
})
export class ModalComponent implements OnInit {

  @Input() data: string = '';
  questionList: Data[] = [];
  selectedAnswers: string[] = [];
  questionsLoaded: boolean = false;
  newQuestion: Data = {
    enunciado: '',
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
    respuesta: ''
  };

  constructor(private modalController: ModalController, private dataProvider: ProviderService, private toastController: ToastController, private alertController: AlertController) { }

  ngOnInit() {
    this.loadQuestions();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  selectAnswer(questionIndex: number, answer: string) {
    this.selectedAnswers[questionIndex] = answer;
    console.log('Selected answer for question', questionIndex, ':', answer);
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  loadQuestions() {
    this.questionsLoaded = false;
    if (this.data === 'Iniciar Quizz') {
      this.dataProvider.getQuestions().subscribe(
        (questions: any) => {
          let questionArray = Object.values(questions) as Data[];
          this.questionList = this.shuffleArray(questionArray); // Baraja las preguntas
          this.questionList = this.questionList.slice(0, 5);
          this.selectedAnswers = Array(this.questionList.length).fill(null);
        },
        (error) => {
          console.error('Error loading questions:', error);
        }
      );
    }
  }

  async submitQuiz() {
    let score = 0;
    console.log(this.selectedAnswers);
    this.questionList.forEach((question, index) => {
      if (this.selectedAnswers[index] === question.respuesta) {
        score++;
      }
    });

    const alert = await this.alertController.create({
      header: 'Resultado del Quiz',
      subHeader: 'Tu puntuación',
      message: `Tu puntuación es ${score} de ${this.questionList.length}`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.dismissModal(); // Llama a la función dismiss() cuando se presione "OK"
          }
        }
      ],
    });

    await alert.present();
  }

  addQuestion() {
    console.log(this.newQuestion);
    this.dataProvider.addQuestion(this.newQuestion).subscribe(() => {
      // Manejar la respuesta, por ejemplo, cerrar el modal o mostrar un mensaje de éxito
      this.dismissModal();
    });
  }
}
