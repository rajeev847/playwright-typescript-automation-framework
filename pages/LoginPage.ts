import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  username = '#username';
  password = '#password';
  loginButton = '#loginBtn';

  async login(userName: string, passWord: string) {
    await this.page.fill(this.username, userName);
    await this.page.fill(this.password, passWord);
    await this.page.click(this.loginButton);
  }
}
