import Supertest from 'supertest';
import Chai from 'chai';
import config from './config/config.js';

const expect = Chai.expect;
const requester = Supertest('http://localhost:' + config.app.PORT);

describe('🐵 --> User testing', () => {
    describe('GETS', () => {
        it('🐵 Get status 200', async () => {
            let response = await requester.get('/api/user');
            expect(response.status).to.be.equal(200);
        })
        it('🐵 Get array of product', async () => { 
            const response = await requester.get('/api/user');
            const { _body } = response;
            expect(_body.payload).to.be.an('array');
        })
    })
});

describe('📦 --> Product testing', () => {
    describe('GETS', () => {
        it('📦 Get status 200', async () => {
            let response = await requester.get('/api/product');
            expect(response.status).to.be.equal(200);
        })
        it('📦 Get array of product', async () => { 
            const response = await requester.get('/api/product');
            const { _body } = response;
            expect(_body.payload).to.be.an('array');
        })
    })
    describe('POST', () => { 
        it('📦 Maybe create product', async () => { 
            let product = {
                product_name: 'Test',
                code: 'Test',
                description: 'product to test POST',
                price: 0,
                quantity: 0,
            }
        })
    })
});