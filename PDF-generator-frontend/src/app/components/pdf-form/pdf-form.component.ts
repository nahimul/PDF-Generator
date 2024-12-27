import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IonButton } from '@ionic/angular/standalone';
import { UserInfo } from 'src/app/model/interfaces';
@Component({
  selector: 'app-pdf-form',
  templateUrl: './pdf-form.component.html',
  styleUrls: ['./pdf-form.component.scss'],
  imports: [
    IonButton,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatFormField,
    ReactiveFormsModule,  
  ]
})
export class PdfFormComponent  implements OnInit {
  @Input() message?: string;
  public isPermanentAddressDisabled = true;
  public pdfFormData: FormGroup = new FormGroup({
    fastName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    presentAddress: new FormControl(''),
    permanentAddress: new FormControl(''),
  });
  @Output() formValue = new EventEmitter<UserInfo>();
  constructor() {}

  onFormSubmit(event: Event) {
    this.formValue.emit(this.pdfFormData.value); 
  }

  enablePermanentAddress():void {
    if (this.pdfFormData?.value?.presentAddress) {
      this.isPermanentAddressDisabled = false;
      this.pdfFormData
        .get('permanentAddress')
        ?.setValue(this.pdfFormData?.get('presentAddress')?.value);
    }
  }

  ngOnInit() {}

}
