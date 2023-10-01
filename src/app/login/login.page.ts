import { ToastController, NavController } from '@ionic/angular';
import * as Parse from 'parse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private toastController: ToastController) {
    // Votre code ici
  }

  ngOnInit() {}


  async signIn() {
    try {
      const user = await Parse.User.logIn(this.username, this.password);
      console.log('Logged in successfully', user);

      // If your app has Tabs, navigate to the HomePage
      this.navCtrl.navigateRoot('HomePage');
    } catch (error: any) {
      console.log('Error logging in', error);

      const toast = await this.toastController.create({
        message: error.message,
        duration: 2000
      });
      toast.present();
    }
  }
}
