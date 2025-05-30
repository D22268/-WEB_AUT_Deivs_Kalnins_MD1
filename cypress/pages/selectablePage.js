export class SelectablePage {
  visit() {
    cy.visit('https://demoqa.com/selectable');
  }

  clickGridTab() {
    cy.contains('Grid').click();
  }

  clickItems(items) {
    items.forEach(item => {
      cy.contains('.list-group-item', item).click();
    });
  }

  assertSelected(items) {
    items.forEach(item => {
      cy.contains('.list-group-item', item)
        .should('have.class', 'active');
    });
  }

  assertNotSelected(items) {
    items.forEach(item => {
      cy.contains('.list-group-item', item)
        .should('not.have.class', 'active');
    });
  }
}
