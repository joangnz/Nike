import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = signal<{ username: string; password: string }[]>([
    { username: 'admin', password: 'admin' }, // Dummy admin user
    { username: 'user', password: 'user' } // Dummy user
  ]);

  private currentUser = signal<{ username: string; role: string } | null>(null);

  loginAdmin(credentials: { username: string; password: string }): boolean {
    const admin = this.users().find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password &&
        credentials.username === 'admin'
    );

    if (admin) {
      this.currentUser.set({ username: admin.username, role: 'admin' });
      return true;
    }
    return false;
  }

  loginUser(credentials: { username: string; password: string }): boolean {
    const user = this.users().find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );

    if (user) {
      this.currentUser.set({ username: user.username, role: 'user' });
      return true;
    }
    return false;
  }

  registerUser(data: { username: string; password: string }): boolean {
    const existingUser = this.users().find(
      (user) => user.username === data.username
    );

    if (!existingUser) {
      this.users.update((users) => [...users, data]);
      return true;
    }
    return false; // User already exists
  }

  getCurrentUser(): Signal<{ username: string; role: string } | null> {
    return this.currentUser;
  }

  logout(): void {
    this.currentUser.set(null);
  }
}
