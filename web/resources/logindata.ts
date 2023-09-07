import { faker } from '@faker-js/faker';
export const LoginData = {
    validUserName: 'one_fnf@mailinator.com',
    validPassword: 'disney123',
    invalidUserName: faker.internet.userName(),
    invalidPassword: faker.internet.password(6)
}