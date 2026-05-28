/* common components cypress code */
/// <reference types="cypress" />

describe('Common UI', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('move page by header menu', () => {
    cy.contains('Stacks').click();
    cy.url().should('include', '/skill');
  });

  it('show top button when scrolling', () => {
    cy.scrollTo(0, 1000);
    cy.get('.top-btn').should('be.visible');
  });

  it('move top when clicking top button', () => {
    cy.scrollTo(0, 1000);
    cy.get('.top-btn').click();
    cy.window().its('scrollY').should('equal', 0);
  });

  it('move next page by next button', () => {
    cy.contains(/Check my stacks/i).click();
    cy.url().should('include', '/skill');
  });

  it('render footer when scrolling bottom', () => {
    cy.scrollTo('bottom');
    cy.get('footer').should('be.visible');
  });
});