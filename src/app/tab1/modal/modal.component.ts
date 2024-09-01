import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonNav, IonAccordion, IonItem, IonLabel, IonAccordionGroup, IonIcon, IonBadge, IonMenu, IonMenuButton, IonButtons, IonAvatar, IonRadio, IonList, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
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
    IonCardTitle
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProviderService],
})
export class ModalComponent implements OnInit {

  @Input() data: string = '';
  questionList: Data[] = [];
  selectedAnswers: string[] = [];

  constructor(private modalController: ModalController, private dataProvider: ProviderService) { }

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
    this.dataProvider.getQuestions().subscribe(
      (questions: any) => {
        let questionArray = Object.values(questions) as Data[];

        questionArray = this.shuffleArray(questionArray);

        this.questionList = questionArray.slice(0, 10);

        this.selectedAnswers = Array(this.questionList.length).fill(null);
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }

  submitQuiz() {
    let score = 0;
    console.log(this.selectedAnswers);
    this.questionList.forEach((question, index) => {
      if (this.selectedAnswers[index] === question.respuesta) {
        score++;
      }
    });

    alert(`Tu puntuación es ${score} de ${this.questionList.length}`);
  }
}
