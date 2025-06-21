import forgotPasswordPage from "../../support/pages/forgotPasswordPage";

describe('Forgot Password Feature', () => {
    it('kirim tautan reset password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        forgotPasswordPage.clickForgotPassword();
        forgotPasswordPage.enterUsername('Admin');
        forgotPasswordPage.clickReset();

    })
})