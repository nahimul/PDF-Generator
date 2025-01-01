import { Component,inject } from '@angular/core';
import { PdfFormComponent } from '../components/pdf-form/pdf-form.component';



import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { UserInfo } from '../model/interfaces';
import { PdfFormService } from '../services/pdf-form.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, PdfFormComponent],
})
export class HomePage {
  private pdfService = inject(PdfFormService);
  public pdfFormData?: UserInfo;
  public parentData = 'Fill the form';

  constructor() {}

  setPDFData(event: UserInfo) {
    this.pdfFormData = event;

    if(this.pdfFormData){
      this.pdfService.saveForm(this.pdfFormData).subscribe({
        next: (response) => {
          console.log('Form submitted successfully', response);
          alert('Form submitted successfully!');
        },
        error: (error) => {
          console.error('Error submitting form', error);
          alert('Failed to submit the form.');
        },
      });
    }
    console.log(this.pdfFormData);
  }
}
