

class LoginPage {

    constructor(page) {
        this.page = page;
        this.bookAppBtn= page.getByRole('heading', { name: 'Book Store Application' });
        this.loginBtn = page.locator("button[id='login']");
        this.usernameField = page.locator('input[placeholder="UserName"]');
        this.passwordField = page.locator('input[placeholder="Password"]');
        this.login= page.getByRole('button', { name: 'Login', exact: true  });
        this.logoutBtn= page.getByRole('button', { name: 'Log out' });
    }

    clickBookApp = async () => {
        await this.bookAppBtn.click();
      }

    clickLogin = async () => {
        await this.loginBtn.click();
    }

    enterCredentials = async (username, password) => {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
    }

    clickLoginButton = async () => {
        await this.login.click();
    }

    verifyLoggedIn = async () => {
        const log= await this.logoutBtn.innerText();
        return log;
      }

    clickLogoutButton = async () => {
        await this.logoutBtn.click();
    }

}

module.exports = LoginPage;

