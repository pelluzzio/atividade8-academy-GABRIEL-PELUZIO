Feature: Criar Usuario

    Scenario: Cadastro Valido
        Given que acessei o site
        When clico em registre se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then crio o usuario

    Scenario: Cadastro invalido nome com mais de 100 caracteres
        Given que acessei o site
        When clico em registre se
        When digito um nome com mais de 100 caracteres
        When digito email
        When digito senha
        When confirmo a senha
        Then recebo um erro 

    Scenario: Cadastro invalido senha menor que 6
        Given que acessei o site
        When clico em registre se
        When digito nome
        When digito email
        When digito senha com menos que 6 caracteres
        When confirmo a senha com menos que 6 caracteres
        Then recebo um erro#1

    Scenario: Cadastro invalido senha maior que 12
        Given que acessei o site
        When clico em registre se
        When digito nome
        When digito email
        When digito senha com mais de 12 caracteres
        When confirmo a senha com mais de 12 caracteres
        Then recebo um erro#1

    Scenario: Cadastro invalido email repetido
        Given que acessei o site
        When clico em registre se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha
        Then recebo uma caixa de erro

    Scenario: Cadastro invalido email com mais de 60 caracteres
        Given que acessei o site
        When clico em registre se
        When digito nome
        When digito email com mais de 60 caracteres
        When digito senha
        When confirmo a senha
        Then recebo um erro 

    Scenario: Cadastro invalido email vazio
        Given que acessei o site
        When clico em registre se
        When digito nome
        When nao digito email
        When digito senha
        When confirmo a senha
        Then recebo um erro#2

    Scenario: Cadastro invalido confirmar a senha errada
        Given que acessei o site
        When clico em registre se
        When digito nome
        When digito email
        When digito senha
        When confirmo a senha diferente 
        Then recebo um erro#3

    Scenario: Cadastro invalido confirmar a senha vazia
        Given que acessei o site
        When clico em registre se
        When digito nome
        When digito email
        When digito senha
        When nao confirmo a senha
        Then recebo um erro#4 

    Scenario: Cadastro valido email com 60 caracteres
        Given que acessei o site
        When clico em registre se
        When digito nome
        When digito email com 60 caracteres
        When digito senha
        When confirmo a senha
        Then crio o usuario
     
     Scenario: Verificação de tipo da conta
        Given que acessei o site
        When clico em login
        When digito o email 
        When digito a senha 
        When clico para entrar 
        When clico em perfil 
        When clico em gerenciar conta
        Then verifico o tipo do perfil comum 
       
    Scenario: Verificação dos tipos de conta
        Given que acessei o site
        When clico em login
        When digito o email 
        When digito a senha 
        When clico para entrar 
        When clico em perfil 
        When clico em gerenciar conta
        Then verifico os tipos de perfil 

