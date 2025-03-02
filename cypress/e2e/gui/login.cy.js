// describe('empty spec', () => {
//   it('realiza login', () => {
//     cy.visit('localhost')
//     cy.get('#user_login').type('root')
//     cy.get('#user_password').type('guitoebe')
//     cy.get('#new_user > .submit-container > .btn').click()
//     cy.get('.blank-state-welcome-title')
//       .should('contain', 'Welcome to GitLab')
//   })
// })

describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
