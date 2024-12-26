import { Component } from '@angular/core';
import {MyForm} from '../module/interfaces';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
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
    //FormsModule,
    MatInputModule,
    IonButton,
    ReactiveFormsModule,
  ],
})
export class HomePage {
  public formValue: any;
  public isPermanentAddressDisabled = true;
  public pdfData: FormGroup = new FormGroup({
    fName: new FormControl(''),
    lName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    presentAddress: new FormControl(''),
    permanentAddress: new FormControl(''),
  });
  constructor() {}

  printPDF(event: Event) {
    this.formValue = this.pdfData.value;
    console.log('hello!!');
    console.log(this.formValue);
  }

  enablePermanentAddress():void {
    if (this.pdfData?.value?.presentAddress) {
      this.isPermanentAddressDisabled = false;
      this.pdfData
        .get('permanentAddress')
        ?.setValue(this.pdfData?.get('presentAddress')?.value);
    }
  }
}
