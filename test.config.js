chai.should();

var env;

beforeEach(function() {
    env = sinon.sandbox.create();
});

afterEach(function() {
    env.restore();
});

/*
 * Region: Helper methods
 */

window.RandomString = RandomString;

function RandomString() {
    return '' + Math.random();
}