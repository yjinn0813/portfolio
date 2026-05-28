/* skill page cypress code */
/// <reference types="cypress" />

describe('Skill page', () => {
  beforeEach(() => {
    cy.visit('/skill');
  });

  it('render skill accordions', () => {
    cy.get('.skill-folder').should('have.length', 6);
  });

  it('toggle skill accordion', () => {
    cy.contains('.skill-folder', 'Frontend').click();
    cy.get('.sk-item.open').should('exist');

    cy.get('.badge').should('exist');

    cy.contains('.skill-folder', 'Frontend').click();
    cy.get('.sk-item.open').should('not.exist');
  });

  it('move next page by next button', () => {
    cy.contains(/Check Experience/i).click();
    cy.url().should('include', '/experience');
  });
});