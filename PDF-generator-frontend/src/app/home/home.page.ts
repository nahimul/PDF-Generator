import { Component } from '@angular/core';
import {PdfFormComponent} from '../components/pdf-form/pdf-form.component';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { UserInfo } from '../model/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    PdfFormComponent,
  ],
})
export class HomePage {

  public pdfFormData?: UserInfo;
  public parentData="Fill the form";
 
  constructor() {}  

  setPDFData(event: UserInfo){
    this.pdfFormData = event;
    console.log(this.pdfFormData);
  }
}
