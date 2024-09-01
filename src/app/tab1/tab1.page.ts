import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonNav, IonAccordion,IonItem,IonLabel,IonAccordionGroup,IonIcon,IonBadge,IonMenu,IonMenuButton,IonButtons, IonAvatar} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'

import { HttpClientModule } from  '@angular/common/http';
import { Data } from '../interfaces/data';
import { ProviderService } from '../services/provider.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MainComponent } from './main/main.component';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonNavLink, IonButton, IonNav,IonAccordion,IonItem,IonLabel,IonAccordionGroup,IonIcon,IonBadge,IonMenu,IonMenuButton,IonButtons,IonAvatar],
})
export class Tab1Page {
  component = MainComponent
 
  onClick() {
    console.log('Button clicked!');
  }
}
