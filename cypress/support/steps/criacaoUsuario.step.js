import { Given, When, Then, Before, BeforeAll} from '@badeball/cypress-cucumber-preprocessor';
import CriacaoUsuario from "../pages/criacaoUsuario.page";
import { faker } from '@faker-js/faker';
var criacao = new CriacaoUsuario();


Given(/^que acessei o site$/, () => {
    cy.visit('');
});

When(/^clico em registre se$/, () => {
    criacao.getRegistro();
});

When(/^digito nome$/, () => {
    criacao.getNome();
    
});

When(/^digito email$/, () => {
    criacao.getEmail()
	
});

When(/^digito senha$/, () => {
    criacao.getSenha();
});

When(/^confirmo a senha$/, () => {
    criacao.getConfirmar();
});

Then(/^crio o usuario$/, () => {
    criacao.getCadastrar();
    cy.wait(400);
    criacao.getCaixaMsgSucesso();
	
});

When(/^digito um nome com mais de 100 caracteres$/, () => {
    criacao.getNome100();
	
});


When(/^digito senha com menos que 6 caracteres$/, () => {
    criacao.getSenha5();
    
	
});

When(/^confirmo a senha com menos que 6 caracteres$/, () => {
    criacao.getConfirmar5();
    criacao.getCadastrar();
    criacao.getErro();
    criacao.getErro1();
	
});

When(/^digito senha com mais de 12 caracteres$/, () => {
	criacao.getSenha13();
});

When(/^confirmo a senha com mais de 12 caracteres$/, () => {
	criacao.getConfirmar13();
    criacao.getCadastrar();
    criacao.getErro3();
    criacao.getErro4();
});


Then(/^recebo uma caixa de erro$/, () => {
    criacao.getCadastrar();
    cy.wait(400);
	criacao.getCaixaMsgErro();
});

Then(/^recebo um erro$/, () => {
	criacao.getCadastrar();
    criacao.getCaixaMsgFalha();
});

Then(/^recebo um erro#1$/, () => {
	criacao.getCadastrar();
});

Then(/^recebo um erro#2$/, () => {
	criacao.getCadastrar();
    criacao.getErro2();
});

Then(/^recebo um erro#3$/, () => {
	criacao.getCadastrar();
    criacao.getErro5();
});

Then(/^recebo um erro#4$/, () => {
	criacao.getCadastrar();
    criacao.getErro6();
});

When(/^digito email com mais de 60 caracteres$/, () => {
	criacao.getEmail61();
});

When(/^nao digito email$/, () => {
    
});

When(/^confirmo a senha diferente$/, () => {
	criacao.getConfirmar7();
});

When(/^nao confirmo a senha$/, () => {
	
});

When(/^digito email com 60 caracteres$/, () => {
	var email = faker.internet.email();
        while (email.length < 60){
            email += 'f';
        }
    criacao.getEmail60().type(email);
});


When(/^clico em login$/, () => {
	criacao.getLogin();
});

When(/^digito o email$/, () => {
	criacao.getEmailLogin();
});

When(/^digito a senha$/, () => {
	criacao.getSenhaLogin();
});

When(/^clico para entrar$/, () => {
	criacao.getLoginButao();
});

When(/^clico em perfil$/, () => {
	criacao.getPerfil();
});

When(/^clico em gerenciar conta$/, () => {
	criacao.getGerenciar();
});

Then(/^verifico o tipo do perfil comum$/, () => {
	criacao.getTipo();
});


Then(/^verifico os tipos de perfil$/, () => {
	criacao.getTipos();
});






