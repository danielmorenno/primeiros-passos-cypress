class MyInfoPage {

    selectorsList() {
        const selectors = {
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

        return selectors 
    }    

    fillPersonalDetails(firstName,lastName) {
        cy.get(this.selectorsList().firstNameField).clear({ force: true }).type(firstName)
        cy.get(this.selectorsList().lastNameField).clear({ force: true }).type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driverLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(55555)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicenseDate)
        cy.get(this.selectorsList().genericField).eq(7).clear({ force: true }).type
        cy.get(this.selectorsList().dataCloseButton).click
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(5).click()
        cy.get(this.selectorsList().secondIconCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(6).click()
        cy.get(this.selectorsList().thirdIconCombobox).click()

    } 
}

export default MyInfoPage