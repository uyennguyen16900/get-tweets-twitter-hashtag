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


  // it('Should get hashtag from user input', function (done) {
  //   chai.request(app)
  //     .post('/hashtag')
  //     .send({ hashtag: '#corgi' })
  //     .end(function (err, res) {
  //       console.log(res.body.hashtag)
  //       res.should.have.status(200)
  //     done()
  //     if (err) {
  //       console.log(err)
  //     }
  //   })
  // })

  it('Should get tweet page from hashtag',
    (done) => {
      chai.request(app)
      .post('/hashtag')
      .send({ hashtag: '#corgi' })
      .end((err, res) => {
        if (err) { done(err) }
        res.status.should.be.equal(200)
        return done()
      })
    })

});
