Feature: Criar Usuario

    Scenario: Cadastro Valido
        Given que acessei o site
        When clico em registre-se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario

    Scenario: Cadastro invalido nome com mais de 100 caracteres
        Given que acessei o site
        When clico em registre-se
        When digito um nome com mais de 100 caracteres
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario

    Scenario: Cadastro invalido senha menor que 6
        Given que acessei o site
        When clico em registre-se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario

    Scenario: Cadastro invalido senha maior que 12
        Given que acessei o site
        When clico em registre-se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario

    Scenario: Cadastro invalido email repetido
        Given que acessei o site
        When clico em registre-se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario

    Scenario: Cadastro invalido email com mais de 60 caracteres
        Given que acessei o site
        When clico em registre-se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario

    Scenario: Cadastro invalido email vazio
        Given que acessei o site
        When clico em registre-se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario

    Scenario: Cadastro invalido confirmar a senha errada
        Given que acessei o site
        When clico em registre-se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario

    Scenario: Cadastro invalido confirmar a senha vazia
        Given que acessei o site
        When clico em registre-se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario

    Scenario: Cadastro invalido email com 60 caracteres
        Given que acessei o site
        When clico em registre-se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario
