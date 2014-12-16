describe 'Device ::', ->

  it 'namespace exists', ->
    parrot.device.should.be.type 'object'
    parrot.device.browser.should.be.type 'object'
    parrot.device.engine.should.be.type 'object'
    parrot.device.os.should.be.type 'object'
    parrot.device.screen.should.be.type 'object'
    parrot.device.type.should.be.type 'string'

  it 'the body contents the data-attributes', ->
    size = Object.keys(document.body.dataset).length
    size.should.be.above 0


