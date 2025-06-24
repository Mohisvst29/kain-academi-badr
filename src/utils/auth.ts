// نظام المصادقة المحسن
export interface User {
  id: string;
  username: string;
  role: 'admin' | 'manager';
  permissions: string[];
}

export class AuthService {
  private static readonly TOKEN_KEY = 'kian_admin_token';
  private static readonly USER_KEY = 'kian_admin_user';

  static login(username: string, password: string): Promise<User | null> {
    return new Promise((resolve) => {
      // في الإنتاج، هذا سيكون API call حقيقي
      if (username === 'kian' && password === 'Mar2992003@') {
        const user: User = {
          id: '1',
          username: 'kian',
          role: 'admin',
          permissions: ['read', 'write', 'delete', 'manage_users']
        };
        
        const token = this.generateToken(user);
        localStorage.setItem(this.TOKEN_KEY, token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        
        resolve(user);
      } else {
        resolve(null);
      }
    });
  }

  static logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  static getCurrentUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }

  static isAuthenticated(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const user = this.getCurrentUser();
    return !!(token && user);
  }

  private static generateToken(user: User): string {
    // في الإنتاج، استخدم JWT حقيقي
    return btoa(JSON.stringify({
      userId: user.id,
      timestamp: Date.now(),
      role: user.role
    }));
  }
}