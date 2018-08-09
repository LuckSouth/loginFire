import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    private ofAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController) {
  }

  ionViewWillLoad() {
    this.ofAuth.authState.subscribe(data => {
      if (data.email && data.uid) {
        this.toast.create({
          message: `Bem-Vindo ao App, ${data.email}`,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: `Não foi possível encontrar detalhes de autenticação.`,
          duration: 3000
        }).present();
      }
    });
  }

}
