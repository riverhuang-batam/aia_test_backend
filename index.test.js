const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  beforeEach(() => {
    server = require("./index");
  });
  afterEach((done) => {
    server.close(done);
  });
  test("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeTruthy();
        done();
      });
  });
});
describe("POST /", () => {
  test("It should response the POST method", (done) => {
    request(app)
      .post("/")
      .send({ tag: "reactjs" })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body).toBeTruthy();
        done();
      });
  });
});
describe("POST /", () => {
    test("It should response the POST method but nothing inside if the tags is not exist", (done) => {
      request(app)
        .post("/")
        .send({ tag: "wefewfewfwefwefwe" })
        .then((response) => {
          expect(response.statusCode).toBe(201);
          expect((response.body.items).length).toBe(0);
          done();
        });
    });
  });