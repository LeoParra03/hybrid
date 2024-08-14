import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonNavLink, IonButton, IonNav, IonAccordion,IonItem,IonLabel,IonAccordionGroup,IonIcon,IonBadge,IonMenu,IonMenuButton,IonButtons} from '@ionic/angular/standalone';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PageOneComponent } from '../page1/page1.component';
import { PageTwoComponent } from '../page2/page2.component';
import { PageThreeComponent } from '../page3/page3.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonNavLink, IonButton, IonNav,IonAccordion,IonItem,IonLabel,IonAccordionGroup,IonIcon,IonBadge,IonMenu,IonMenuButton,IonButtons],
})
export class Tab1Page {
  component = PageOneComponent;
  component2 = PageTwoComponent;
  component3 = PageThreeComponent;
  onClick() {
    console.log('Button clicked!');
  }
}
