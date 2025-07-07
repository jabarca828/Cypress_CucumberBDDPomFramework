/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When('I type a username {word}', (username) => {
    cy.get('[id="text"]').type(username);
})

When('I type a password {word}', (password) => {
    cy.get('[id="password"').type(password);
})

When('I click on the login button', () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get("#login-button").invoke("removeAttr", "target").click();
})

Then('I should be presented with an alert box which contains text {string}', (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
})
