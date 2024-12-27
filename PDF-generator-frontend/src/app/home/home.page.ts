import { Component } from '@angular/core';
// import {UserForm} from '../model/interfaces';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MyComponent}  from '../components/my-components/my-components.component';

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
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    MatFormField,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    IonButton,
    ReactiveFormsModule,
    MyComponent,
  ],
})
export class HomePage {
  public isPermanentAddressDisabled = true;
  public pdfData: FormGroup = new FormGroup({
    fastName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    presentAddress: new FormControl(''),
    permanentAddress: new FormControl(''),
  });
  constructor() {}

  printPDF(event: Event) {
    console.log(this.pdfData?.get('fastName')?.value);
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
