class forgotPasswordPage {
    clickForgotPassword() {
        cy.contains('Forgot your password?').click();
    }
    enterUsername(username) {
        cy.get('input[placeholder="Username"]').type(username);
    }
    clickReset() {
        cy.contains('Reset Password').click();
    }
    assertResetsent() {
        cy.contains('Reset Password link sent successfully').should('exist');
    }
}

export default new forgotPasswordPage();