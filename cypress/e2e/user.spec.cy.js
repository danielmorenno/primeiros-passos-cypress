 import userData from '../fixtures/users/user-data.json'
 import LoginPage from '../pages/loginPage.js'
 import DashboardPage from '../pages/dashboardPage.js'
 import MenuPage from '../pages/menuPage.js'
 import MyInfoPage from '../pages/myInfoPage.js'

  const Chance = require('chance')


 const chance = new Chance()
 const loginPage = new LoginPage()
 const dashboardPage = new DashboardPage()
 const menuPage = new MenuPage()
 const myInfoPage = new MyInfoPage() 

describe('Orange HRM Tests', () => {

  const selectorsList = {

    
  
  } 

  it.only('User Info update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password) 
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('EmployId', 'OtherId','55555', '2025-07-29')  
    myInfoPage.fillStatus()
    myInfoPage.saveForm
  })
}) 

function newFunction_1(newFunction) {
  newFunction()
}
