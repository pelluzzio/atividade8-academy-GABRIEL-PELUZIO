Feature: Login

    Scenario: Login correto 
        Given que acessei o site
        When clico em login
        When digito o email 
        When digito a senha 
        When clico para entrar  
    
    Scenario: Conta Inexistente 
       Given que entrei no site
        When clico em login
        When digito um email inexistente
        When digito a senha 
        When clico entrar
     
    Scenario: Email em branco 
        Given que entrei no site
        When clico em login
        When nao digito o email 
        When digito a senha 
        When clico entrar#1    
    
    Scenario: Senha  em branco 
        Given que entrei no site
        When clico em login
        When digito o email 
        When nao digito a senha 
        When clico entrar#2 