 import userData from '../fixtures/users/user-data.json'
 import LoginPage from '../pages/loginPage.js'
 import DashboardPage from '../pages/dashboardPage.js'
 import MenuPage from '../pages/menuPage.js'

 const loginPage = new LoginPage()
 const dashboardPage = new DashboardPage()
 const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    dataCloseButton: ".--close",
    genericCombobox: ".oxd-label",
    secondIconCombobox: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input",
    thirdIconCombobox: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input",
    submitButton: "[type='submit']",  
  
  
  } 

  it.only('User Info update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password) 
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()  


 //   cy.visit('/auth/login')
// cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
 //   cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
 //   cy.get(selectorsList.loginButton).click()
 //   cy.get(selectorsList.dashboardGrid)
//    cy.get(selectorsList.myInfoButton).click()
//    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
 //   cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
//    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
  //  cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
//    cy.get(selectorsList.genericField).eq(5).clear().type('5555')
  //  cy.get(selectorsList.genericField).eq(6).clear().type('2025-12-26')
//    cy.get(selectorsList.dataCloseButton).click()
  //  cy.get(selectorsList.submitButton).eq(0).click({force: true})
 //   cy.get('body').should('contain', 'Successfully Updated')
 //   cy.get(selectorsList.genericCombobox).eq(5).click()
 //   cy.get(selectorsList.secondIconCombobox).click()
 //   cy.get(selectorsList.genericCombobox).eq(6).click()
 //   cy.get(selectorsList.thirdIconCombobox).click()




    
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
}) 

function newFunction_1(newFunction) {
  newFunction()
}
