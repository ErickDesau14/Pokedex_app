import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private toastController: ToastController,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async login() {
    const { email, password } = this.loginForm.value;
    try {
      const success = await this.authService.login(email, password);
      if (success) {
        const user = await this.authService.getUserInfo();
        console.log('Bienvenido', user.name);

        this.router.navigate(['/list-pokemons']);
      } else {
        this.showToast('Credenciales inválidas');
      }
    } catch (error) {
      this.showToast('Error al iniciar sesión');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }
}
