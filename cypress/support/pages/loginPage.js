class loginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    inputUsername(username) {
         cy.get('input[name="username"]').type(username);
    }
    inputPassword(password) {
         cy.get('input[name="password"]').type(password);
    }
    loginButton() {
        cy.get('button[type="submit"]').click();
    }

    assertionsLoginSuccess() {
        cy.url().should('include', '/dashboard');
    }
}

export default new loginPage();