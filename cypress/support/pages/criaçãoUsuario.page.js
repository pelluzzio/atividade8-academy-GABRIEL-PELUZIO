export default class CriaçãoUsuario{

    
    linkRegistre_se = '[href="/register"]';
    inputNome = ':nth-child(1) > .profile-input';
    inputEmail = ':nth-child(2) > .profile-input';
    inputSenha = ':nth-child(3) > .profile-input';
    inputConfirmarSenha = ':nth-child(4) > .profile-input';
    buttonCadastrar = '.account-save-button';
    inputNome100 =':nth-child(1) > .profile-input';
    
    getRegistro (){
        return cy.get(this.linkRegistre_se);
    };
    getNome (){
        return cy.get(this.inputNome);
    }
    getEmail (){
        return cy.get(this.inputEmail);
    };
    getSenha (){
        return cy.get(this.inputSenha);
    }
    getConfirmar (){
        return cy.get(this.inputConfirmarSenha);
    }

    getCadastrar (){
        return cy.get(this.buttonCadastrar);
    }
    getNome100 (){
        return cy.get(this.inputNome100);
    }
}