
class dashboardPage {
  clickDirectory() {
    cy.wait(2000).get(':nth-child(9) > .oxd-main-menu-item > .oxd-text').click();
  }

  assertDirectoryPage() {
    cy.wait(2000).contains('Search').should('be.visible');
  }

  searchDirectoryByName(name) {
    // Input nama di kolom nama 
    cy.get('input[placeholder="Type for hints..."]').type(name);

    // Klik tombol search
    cy.get('button[type="submit"]').contains('Search').click();
  }

  assertSearchResult() {
    cy.contains('Invalid').should('be.visible');
  }

}

export default new dashboardPage();