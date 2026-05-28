/* contact page cypress code */
/// <reference types="cypress" />

describe('Contsct Page', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('render and count contact box', () => {
    cy.get('.mac').should('exist');
    cy.get('.mac').should('have.length', 4);
  });

  it('open github page', () => {
    cy.get('.contact-link')
      .first()
      .should('have.attr', 'href')
      .and('include', 'github');
  });

  it('open mail client', () => {
    cy.get('.contact-link')
      .eq(2)
      .should('have.attr', 'href')
      .and('include', 'mailto');
  });
});