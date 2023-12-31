import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { searchOutline, heart, cart, addCircle, person, storefrontOutline, cartOutline, settings, chevronForwardOutline, timeOutline, paperPlane } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent]
})
export class Tab4Page {

  constructor() {
    addIcons({ searchOutline, heart, cart, addCircle, person, storefrontOutline, cartOutline, settings, chevronForwardOutline, timeOutline, paperPlane });
  }



}
