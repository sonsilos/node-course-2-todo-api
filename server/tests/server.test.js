const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
var {ObjectID} = require('mongodb');

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
},{
  _id: new ObjectID(),
  text: 'Second test todo'
}]



beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(()=>done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});



describe('GET /todos', () => {
  it('should get all data', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
  });
});

describe('GET /todos/:id', () => {
  it('should get id', (done) => {
    request(app)
    .get('/todos/'+ todos[0]._id.toHexString())
    .expect(200)
    .expect((res)=>{
      expect(res.body.todo.text).toBe(todos[0].text);
    })
    .end(done);
  });

  it('should return 404  if todo not found ', (done) => {
    var hexID = new ObjectID().toHexString();
    request(app)
    .get('/todos/'+ hexID)
    .expect(404)
    .end(done);
  });

  it('should return 404 if non object ID ', (done) => {
    if(!ObjectID.isValid(todos[0]._id.toHexString())){
      return res.status(400).send({ detail: 'not found'});
    }
    request(app)
    .get('/todos/xxxx')
    .expect(404)
    .end(done);
  });

});


describe('Delete /todos/:id', () => {
  it('should delete todo', (done) => {
    var hexId = todos[0]._id.toHexString();
    request(app)
    .delete('/todos/'+ hexId)
    .expect(200)
    .expect((res)=>{
      expect(res.body.todo._id).toBe(hexId);
    })
    .end(done);
  });

  it('should return 404  if todo not found ', (done) => {
    var hexID = new ObjectID().toHexString();
    request(app)
    .delete('/todos/'+ hexID)
    .expect(404)
    .end(done);
  });

  it('should return 404 if non object ID ', (done) => {
    if(!ObjectID.isValid(todos[0]._id.toHexString())){
      return res.status(400).send({ detail: 'not found'});
    }
    request(app)
    .delete('/todos/xxxx')
    .expect(404)
    .end(done);
  });

});