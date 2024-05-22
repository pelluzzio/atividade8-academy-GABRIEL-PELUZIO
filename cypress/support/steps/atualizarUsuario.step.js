import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import Atualizar from "../pages/atualizar.page";
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); 
var atualizar = new Atualizar();


Given(/^que acessei o site$/, () => {
	cy.visit('');
    atualizar.getRegistro();
    atualizar.getNome();
    atualizar.getEmail()
	atualizar.getSenha();
    atualizar.getConfirmar();
    atualizar.getCadastrar();
    cy.wait(400);
    atualizar.getOk();
    atualizar.getPerfil();
    atualizar.getLogout();
});

When(/^tento acessar a edição de infos$/, () => {
	cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/account')
});

Then(/^vou para a pagina de login$/, () => {
	atualizar.getHeaderLogin();
});

When(/^faço o login$/, () => {
	atualizar.getLogin();
    atualizar.getEmailLogin();
    atualizar.getSenhaLogin();
    atualizar.getLoginButao();
});

Then(/^vou para a pagina de edição$/, () => {
	atualizar.getGerenciar();
    atualizar.getHeaderGerenciar();
});

When(/^entro em perfil$/, () => {
	atualizar.getPerfil();
});

When(/^acesso a pagina de edição$/, () => {
	atualizar.getGerenciar();
    atualizar.getHeaderGerenciar();
});

Then(/^vejo apenas meus proprios dados$/, () => {
	atualizar.getGerenciarNome();
    atualizar.getGerenciarEmail();
});

Then(/^altero meus proprios dados$/, () => {
	atualizar.getGerenciarNome().type('1');
    atualizar.getBotaosenha();
    atualizar.getGerenciarSenha();
    atualizar.getGerenciarConfimarSenha();
    atualizar.getSalvar();
});

Then(/^altero meus proprios dados invalido$/, () => {
	atualizar.getGerenciarNome();
    atualizar.getBotaosenha();
    atualizar.getGerenciarSenhaInvalido();
    atualizar.getGerenciarConfimarSenha();
    atualizar.getSalvar();
    atualizar.getGerenciarErro();
});
Then(/^altero meus proprios dados invalido#1$/, () => {
	atualizar.getGerenciarNome();
    atualizar.getBotaosenha();
    atualizar.getGerenciarSenhaInvalido1();
    atualizar.getGerenciarConfimarSenhaInvalido();
    atualizar.getSalvar();
    atualizar.getCaixaMsgOcorreu();
});

Then(/^altero meus proprios dados invalido#2$/, () => {
	atualizar.getBotaosenha();
    atualizar.getGerenciarConfimarSenha();
    atualizar.getSalvar();
    atualizar.getGerenciarErro1();
});
Then(/^altero meus proprios dados invalido#3$/, () => {
	atualizar.getGerenciarNome().clear();
    atualizar.getBotaosenha();
    atualizar.getGerenciarSenha();
    atualizar.getGerenciarConfimarSenha();
    atualizar.getSalvar();
    atualizar.getGerenciarErro2();
});
Then(/^altero meus proprios dados invalido#4$/, () => {
	atualizar.getGerenciarNome();
    atualizar.getBotaosenha();
    atualizar.getGerenciarSenha();
    atualizar.getGerenciarConfimarSenhaInvalido1();
    atualizar.getSalvar();
    atualizar.getGerenciarErro3();
});
Then(/^altero meus proprios dados invalido#5$/, () => {
	atualizar.getGerenciarNome();
    atualizar.getBotaosenha();
    atualizar.getGerenciarSenha();
    atualizar.getSalvar();
    atualizar.getGerenciarErro4();
});
Then(/^altero meus proprios dados#1$/, () => {
    atualizar.getTipo();
});
Given(/^que acessei o site#1$/, () => {
	cy.visit('');
});