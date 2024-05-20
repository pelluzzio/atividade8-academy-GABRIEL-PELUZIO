import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import CriaçãoUsuario from "../pages/criaçãoUsuario.page";
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); 
var criação = new CriaçãoUsuario();
import user100 from '..fixtures/user100.json'


Given(/^que acessei o site$/, () => {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com')
	return true;
});

When(/^clico em registre-se$/, () => {
    criação.getRegistro().should('be.visible');
    criação.getRegistro().click();

	return true;
});

When(/^digito nome$/, () => {
    criação.getNome().should('be.visible');
    criação.getNome().type('Zico')
	return true;
});

When(/^digito email$/, () => {
    criação.getEmail().should('be.visible');
    criação.getEmail().type(randomEmail);
	return true;
});

When(/^digito senha$/, () => {
    criação.getSenha().should('be.visible');
    criação.getSenha().type('123456');
	return true;
});

When(/^confirmo a senha$/, () => {
    criação.getConfirmar().should('be.visible');
    criação.getConfirmar().type('123456');
	return true;
});

Then(/^crio o usuario$/, () => {
    criação.getCadastrar().should('be.visible');
    criação.getCadastrar().click();
	return true;
});

When(/^digito um nome com mais de 100 caracteres$/, () => {
    criação.getNome100().should('be.visible');
    criação.getNome100().type(user100)
	return true;
});

