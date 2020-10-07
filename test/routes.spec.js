import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';
//assertyion style
chai.should();
chai.use(chaiHttp);
describe('Task Api',()=>{

//test get routes
describe("GET /posts",()=>{
    it("It should get all the blog posts",(done)=>{
        chai.request(server)
        .get("/posts")
        .end((err,response)=>{
            response.should.have.status(200);
            done();
        })
    })
})
//Test by Id


//test post routes


//test put routes


//test delete routes


//test patch


})