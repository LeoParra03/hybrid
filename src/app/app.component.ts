
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonNav} from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonNav],
})
export class AppComponent {
 
}
