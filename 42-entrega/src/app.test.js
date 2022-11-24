import Supertest from 'supertest';
import Chai from 'chai';
import config from './config/config.js';

const expect = Chai.expect;
const requester = Supertest('http://localhost:' + config.app.PORT);



describe('User testing', () => {
    describe('GETS', () => {
        it('La petición base debe retornar 200', async () => {
            let response = await requester.get('/api/user');
            expect(response.status).to.be.equal(200);
        })
    })
    it('la petición base debe retornar un arreglo de usuarios', async () => { 
        const response = await requester.get('/api/user');
        const { _body } = response;
        expect(_body.payload).to.be.an('array');
    })
   /*  describe('POST', () => { 
        it('Debería poder crear un usuario', async () => { 
            let user = {
                first_name: 'Test',
                last_name: 'Test',
                email: 'test@mail.com',
                password: '1234',
                age: 0,
                image: 'avatar.png',
                role: 'user',
                phone: 00000000,
            }
            const response = await (await requester.post('/api/sessions/register')).send(user);
            const { _body } = response;
            console.log(_body);
            expect(_body.payload).to.include.keys('password', '_id')

        })
    }) */
});