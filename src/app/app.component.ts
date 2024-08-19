import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonNav} from '@ionic/angular/standalone';

import { TabsPage } from './tabs/tabs.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonNav],
})
export class AppComponent {
 
}
