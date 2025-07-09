import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://13.56.252.230:8076/auth/authenticate';

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response: any = await this.http
        .post(this.apiUrl, { email, password })
        .toPromise();

      if (response?.data?.jwt) {
        await this.storage.set('token', response.data.jwt);
        await this.storage.set('user', response.data); // opcional: guarda info del usuario
        return true;
      }

      return false;
    } catch (error) {
      console.error('Error al hacer login:', error);
      return false;
    }
  }

  async logout() {
    await this.storage.remove('token');
    await this.storage.remove('user');
  }

  async isLoggedIn(): Promise<boolean> {
    const token = await this.storage.get('token');
    return !!token;
  }

  async getUserInfo(): Promise<any> {
    return await this.storage.get('user');
  }
}
