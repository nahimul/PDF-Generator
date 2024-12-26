import { Component } from '@angular/core';
import { FormControl,FormGroup, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatFormField, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    MatFormField,
    MatFormFieldModule,
    MatFormField,
    FormsModule,
    MatInputModule,
    IonButton,
  ],
})
export class HomePage {
  public pdfForm: FormGroup = new FormGroup({
    fName: new FormControl(''),
    lName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    presentAddress: new FormControl(''),
    permanentAddress: new FormControl(''),
  });
  constructor() {}

  pdfFormData (event:Event){};
}
