/// <reference types="cypress" />
import { use } from "chai";
import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
        elements = {
        username_TextField : () => cy.get('#text'),
        password_TextField : () => cy.get('#password'), 
        login_Button : () => cy.get('#login-button'),
    }

    navigateTo_Login_Page() {
        super.navigate("/Login-Portal/index.html");
    }

    type_Username(username) {
        this.elements.username_TextField().type(username);
    }

    type_Password(password) {
        this.elements.password_TextField().type(password);  
    }

    clickOn_Login_Button() {
        this.elements.login_Button().click();
    }
}
export default Login_PO;