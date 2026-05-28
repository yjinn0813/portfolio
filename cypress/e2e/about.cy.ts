/* main page cypress code */
/// <reference types="cypress" />

describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('render header and main contents', () => {
    cy.get('header').should('be.visible');
    cy.get('.intro').should('be.visible');
    cy.get('.paragraph').should('be.visible');
  });

  it('hide header when scrolling', () => {
    cy.scrollTo(0, 500);
    cy.get('header').should('have.class', 'hide');
  });

  it('show top button when scrolling', () => {
    cy.scrollTo(0, 1000);
    cy.get('.top-btn').should('be.visible');
  });

  it('show philosophy section when scrolling', () => {
    cy.scrollTo(0, 1200);
    cy.get('.philosophy', { timeout: 10000 })
      .should('have.class', 'show');
  });

  it('move next page by next button', () => {
    cy.contains(/check my stacks/i).click();
    cy.url().should('include', '/skill');
  });

  it('render footer at bottom', () => {
    cy.scrollTo('bottom');
    cy.get('footer').should('be.visible');
  });
});