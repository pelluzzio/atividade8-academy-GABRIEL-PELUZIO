import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import CriaçãoUsuario from "../pages/criaçãoUsuario.page";
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); 
var criação = new CriaçãoUsuario();

