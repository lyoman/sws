import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  address = 'https://humanrights.pythonanywhere.com/api/';
  // AUTH_SERVER_ADDRESS:  string  =  'http://localhost:8000/api/';

  httpPutOptions1 = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Accept: '*/*'
    })
  };

  constructor(
    private httpClient: HttpClient,
    private alertController: AlertController,
  ) { }


  public portPostData3(url: string, formData: any): Observable<any> {
    return this.httpClient.post(this.address + url, formData, this.httpPutOptions1);
  }

  register(url, userData): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    return this.httpClient.post(`${this.address}${url}`, userData, { headers: { 'Content-Type': 'application/json' } });
  }

  async alertMsg(head, sub, msg) {
    const alert = await this.alertController.create({
      header: head,
      subHeader: sub,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
