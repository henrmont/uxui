import { Component, ElementRef, ViewChild } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { searchOutline, heart, cart, addCircle, person, storefrontOutline, cartOutline, settings } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent],
})
export class Tab1Page {

  constructor() {
    addIcons({ searchOutline, heart, cart, addCircle, person, storefrontOutline, cartOutline, settings });
  }

}
