const app = require('./../index')
const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')
const should = chai.should()
const it = mocha.it
const describe = mocha.describe
var expect = chai.expect;

chai.use(chaiHttp)

describe('site', function () {
  it('Should have home page', function (done) {
    // Test that the home page loads
    chai
      .request(app)
      .get('/')
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        res.status.should.be.equal(200)
        return done() // Call done if the test completed successfully.
      })
  })

  it('Should have tweet page', function (done) {
    // Test that the home page loads
    chai
      .request(app)
      .get('/hashtag')
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        res.status.should.be.equal(200)
        return done() // Call done if the test completed successfully.
      })
  })
});
