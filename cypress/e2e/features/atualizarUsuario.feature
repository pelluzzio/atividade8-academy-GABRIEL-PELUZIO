Feature: Atualizar Usuario

Scenario: Apenas um Usuario Autenticado pode acessar a edição
    Given que acessei o site#1
    When tento acessar a edição de infos
    Then vou para a pagina de login

Scenario: Apenas um Usuario Autenticado pode acessar a edição
    Given que acessei o site
    When faço o login
    When entro em perfil
    Then vou para a pagina de edição

Scenario: Um usuario comum pode alterar e ver apenas suas infos 
    Given que acessei o site#1
    When faço o login
    When entro em perfil
    When acesso a pagina de edição
    Then vejo apenas meus proprios dados

Scenario: Atualizar nome e senha no gerenciamento de conta valido
    Given que acessei o site#1
    When faço o login
    When entro em perfil
    When acesso a pagina de edição
    Then altero meus proprios dados

Scenario: Atualizar nome no gerenciamento de conta invalido
    Given que acessei o site#1
    When faço o login
    When entro em perfil
    When acesso a pagina de edição
    Then altero meus proprios dados invalido#3

Scenario: Atualizar senha no gerenciamento de conta invalido#1
    Given que acessei o site#1
    When faço o login
    When entro em perfil
    When acesso a pagina de edição
    Then altero meus proprios dados invalido

Scenario: Atualizar senha no gerenciamento de conta invalido#2
    Given que acessei o site#1
    When faço o login
    When entro em perfil
    When acesso a pagina de edição
    Then altero meus proprios dados invalido#1

Scenario: Atualizar senha no gerenciamento de conta invalido#3
    Given que acessei o site#1
    When faço o login
    When entro em perfil
    When acesso a pagina de edição
    Then altero meus proprios dados invalido#2

Scenario: Confirmar senha no gerenciamento de conta invalido#1
    Given que acessei o site#1
    When faço o login
    When entro em perfil
    When acesso a pagina de edição
    Then altero meus proprios dados invalido#4

Scenario: Confirmar senha no gerenciamento de conta invalido#2
    Given que acessei o site#1
    When faço o login
    When entro em perfil
    When acesso a pagina de edição
    Then altero meus proprios dados invalido#5

Scenario: Deve ser impossivel ver alterar o tipo da conta no gerenciar
    Given que acessei o site#1
    When faço o login
    When entro em perfil
    When acesso a pagina de edição
    Then altero meus proprios dados#1
