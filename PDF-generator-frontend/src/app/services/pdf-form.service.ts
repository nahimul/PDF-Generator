import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../model/interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PdfFormService {
  private URL = 'http://localhost:8001/api/v1/user/saveform';
  private http = inject (HttpClient);
  constructor() {}

  saveForm(formData:UserInfo): Observable<any> {
    console.log(formData);
    return this.http.post(this.URL,formData);
  }

}
