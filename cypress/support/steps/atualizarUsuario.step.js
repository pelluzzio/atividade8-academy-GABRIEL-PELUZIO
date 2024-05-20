import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import AttUsuarios from "../pages/atualizar.page";
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); 
var atualizar = new AttUsuarios();



