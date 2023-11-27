import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { searchOutline, heart, cart, addCircle, person, storefrontOutline, cartOutline, settings } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent]
})
export class Tab5Page {

  constructor() {
    addIcons({ searchOutline, heart, cart, addCircle, person, storefrontOutline, cartOutline, settings });
  }



}
