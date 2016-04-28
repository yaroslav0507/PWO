describe('app :: DataStore', function () {
    var sut;

    beforeEach(function() {
        module('app');

        inject(function(DataStore){
            sut = DataStore
        });
    });

    it('should pass', function () {
        true.should.equal.true;

    });

});