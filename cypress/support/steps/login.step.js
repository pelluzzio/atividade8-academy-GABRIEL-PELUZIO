import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import Login from "../pages/login.page";
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); 
var login = new Login();



Given(/^que acessei o site$/, () => {
	cy.visit('');
    login.getRegistro();
    login.getNome();
    login.getEmail()
	login.getSenha();
    login.getConfirmar();
    login.getCadastrar();
    cy.wait(400);
    login.getCaixaMsgSucesso();
    login.getOk();
    login.getPerfil();
    login.getLogout();
    
});


When(/^clico em login$/, () => {
    login.getLogin();
});

When(/^digito o email$/, () => {
	login.getEmailLogin();
});

When(/^digito a senha$/, () => {
	login.getSenhaLogin();
});

When(/^clico para entrar$/, () => {
	login.getLoginButao();
    login.getPerfil();
});

When(/^digito um email inexistente$/, () => {
	login.getEmailInexistente();
});

When(/^nao digito o email$/, () => {
	
});

When(/^nao digito a senha$/, () => {
	
});

Given(/^que entrei no site$/, () => {
	cy.visit('');
});

When(/^clico entrar$/, () => {
	login.getLoginButao();
    login.getCaixaMsgAutenticar();
});

When(/^clico entrar#1$/, () => {
	login.getLoginButao();
    login.getErro1();
});
When(/^clico entrar#2$/, () => {
	login.getLoginButao();
    login.getErro2();
});

