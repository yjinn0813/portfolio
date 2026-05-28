/* experience page cypress code */
/// <reference types="cypress" />

describe('Experience page', () => {
  beforeEach(() => {
    cy.visit('/experience');
  });

  it('render experience box', () => {
    cy.get('.timeline-item').should('exist');
  });

  it('toggle work accordion', () => {
    cy.contains('.project-title', '2025.01 ~ 2026.02').click();
    cy.get('.project-title.open').should('exist');
    cy.get('.sub-list').should('exist');
    
    cy.contains('.project-title', '2025.01 ~ 2026.02').click();
    cy.get('.project-title.open').should('not.exist');
  });

  it('render link button', () => {
    cy.get('.edu-link a')
      .should('have.attr', 'href')
      .and('include', 'github');
  });

  it('move next page by next button', () => {
    cy.contains(/Check Projects/i).click();
    cy.url().should('include', '/project');
  });
});