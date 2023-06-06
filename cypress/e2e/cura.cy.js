describe('Cura Appointment System', () => {
  it('Visit the URl', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    //Appoinment System
    cy.get('select').select('Seoul CURA Healthcare Center') 
    cy.get('#chk_hospotal_readmission').click()
    cy.get('#radio_program_medicaid').click()
    cy.get('#txt_visit_date').type('21/03/2023')
    cy.get('#txt_comment').click({force:true})
    cy.get('#txt_comment').type('Make an appoinment for treatment')
    cy.get('#btn-book-appointment').click()
    cy.get('h2').should('have.text','Appointment Confirmation')
    cy.get('#comment').should('have.text','Make an appoinment for treatment')
    cy.get('.text-center > .btn').click()
    cy.get('h1').should('have.text','CURA Healthcare Service')

    
    
  })


})