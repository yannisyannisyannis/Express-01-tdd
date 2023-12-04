const request = require("supertest"); 
const app = require ("../app");

describe("get /movies", ()=>{ 
    it("should return list of movies", async () => { 
const response = await request (app) .get ("/movies");
expect(response.status).toBe(200); 
expect (response.body).not.toBe(0);
    });
})
//quête 1// 

describe("get /movies/:id", ()=>{ 
    it ("should return id of movies", async ()=> { 
        const response = await request (app) .get ("/movies/1")
        expect(response.status).toBe(200); 
        expect (response.headers ["content-type"]).toMatch(/json/);

    })
    
    it ("should return id 0 of movies", async ()=> { 
        const response = await request (app) .get ("/movies/0")
        expect (response.status).toBe(404);
    })
})

 

