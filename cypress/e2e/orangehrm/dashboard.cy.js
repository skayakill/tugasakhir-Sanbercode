import loginPage from "../../support/pages/loginPage";
import dashboardPage from "../../support/pages/dashboardPage";

describe('orangeHRM - login tests automation with intercept', () => {
    beforeEach(() => {
    loginPage.visit();
    });

     it('login dengan data yang valid dan ternavigasi ke halaman dashboard', () => {
        loginPage.inputUsername('Admin')
        loginPage.inputPassword('admin123')
        loginPage.loginButton();
        loginPage.assertionsLoginSuccess();
        cy.url().should('include', '/dashboard');

        dashboardPage.clickDirectory();
        dashboardPage.assertDirectoryPage();

    // Lakukan pencarian (misalnya: nama "Nathan")
        dashboardPage.searchDirectoryByName('Nathan');

    // Verifikasi hasil
        dashboardPage.assertSearchResult('Nathan');

        
        
    });

  
});