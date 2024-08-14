import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonNav} from '@ionic/angular/standalone';
import { Tab1Page } from './tab1/tab1.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonNav],
})
export class AppComponent {
  component = Tab1Page;
}
