(function() {
  describe('Device ::', function() {
    it('namespace exists', function() {
      parrot.device.should.be.type('object');
      parrot.device.browser.should.be.type('object');
      parrot.device.engine.should.be.type('object');
      parrot.device.os.should.be.type('object');
      parrot.device.screen.should.be.type('object');
      return parrot.device.type.should.be.type('string');
    });
    return it('the body contents the data-attributes', function() {
      var size;
      size = Object.keys(document.body.dataset).length;
      return size.should.be.above(0);
    });
  });

}).call(this);
