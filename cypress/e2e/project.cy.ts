/* project page cypress code */
/// <reference types="cypress" />

describe('Project Page', () => {
  beforeEach(() => {
    cy.visit('/project');
  });

  it('render project preview', () => {
    cy.get('.pj-preview').should('exist');
  });
  
  it('open modal when clicking preview', () => {
    cy.get('.pj-preview').first().click();
    cy.get('.pj-modal-overlay').should('exist');
  });
  
  it('slide project images in modal', () => {
    cy.get('.pj-preview').first().click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper').should('exist');
  });
  
  it('open external link from modal', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    }); // 브라우저 윈도우 객체 가져와서 window.open 호출됐는지 확인
    // stub(): Replace a function, record its usage and control its behavior.

    cy.get('.pj-preview').eq(2).click(); // 버튼 있는 프로젝트 열기
    cy.contains('Website').click();

    cy.get('@windowOpen').should('be.called');
  });

  /* close modal interaction check */
  it('close modal by overlay click', () => {
    cy.get('.pj-preview').first().click();
    cy.get('.pj-modal-overlay').click('topLeft');
    cy.get('.pj-modal-overlay').should('not.exist');
  });

  it('close modal by ESC key', () => {
    cy.get('.pj-preview').first().click();
    cy.get('body').type('{esc}');
    cy.get('.pj-modal-overlay').should('not.exist');
  });

  it('close modal by close button', () => {
    cy.get('.pj-preview').first().click();
    cy.get('.modal-close').click();
    cy.get('.pj-modal-overlay').should('not.exist');
  });

  it('move next page by next button', () => {
    cy.contains(/Contact Me!/i).click();
    cy.url().should('include', '/contact');
  });
});