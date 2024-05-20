import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import PesquisaDeUsuarios from "../pages/login.page";
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); 
var pesquisa = new PesquisaDeUsuarios();


