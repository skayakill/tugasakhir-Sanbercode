import loginPage from "../../support/pages/loginPage";  //mengkonfigurasikan Page object model ke dalam script test pada file login

describe('orangeHRM - login tests automation with intercept', () => {
    beforeEach(() => {
        
        loginPage.visit();
    });
    it('login dengan data yang valid', () => {
        cy.intercept('POST', '/web/index.php/auth/validate').as('successfulLogin')
        loginPage.inputUsername('Admin')
        loginPage.inputPassword('admin123')
        loginPage.loginButton();

        cy.wait('@successfulLogin').its('response.statusCode').should('eq', 302);
        loginPage.assertionsLoginSuccess();
    });

});