var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  blipclock = require('../app');

before(function () {
  this.jsdom = require('jsdom-global')();
});

after(function () {
  this.jsdom();
});

describe('Blipclock', function() {
  it ('adds a width and height if it is not specified', function() {
    var canvas = mockCanvas();

    expect(canvas.getAttribute('width')).to.be.null;
    expect(canvas.getAttribute('height')).to.be.null;

    blipclock(canvas)

    canvas.width.should.equal(400);
    canvas.height.should.equal(400);
    canvas.getAttribute('width').should.equal('400');
    canvas.getAttribute('height').should.equal('400');
  });

  it ('keeps height and width if specified', function() {
    var canvas = mockCanvas();
    canvas.setAttribute('width', 42);
    canvas.setAttribute('height', 1337);

    blipclock(canvas);

    canvas.width.should.equal(42);
    canvas.height.should.equal(1337);
    canvas.getAttribute('width').should.equal('42');
    canvas.getAttribute('height').should.equal('1337');
  });

  it ('should get a default config', function() {
    var conf = blipclock.config();

    conf.colorOn.should.equal('#C63D0F')
    conf.colorOff.should.equal('#FDF3E7');
  });

  it ('should not apply a config where unknown properties exist', function() {
    var newConfig = {
        colorOn: '#fff',
        colorOff: '#333',
        foo: 'unknown-property'
    };

    var conf = blipclock.config(newConfig);

    conf.colorOn.should.equal('#C63D0F')
    conf.colorOff.should.equal('#FDF3E7');
  });

  it ('should apply a new config to the default config', function() {
    var newConfig = {
        colorOn: '#fff',
        colorOff: '#333'
    };

    var conf = blipclock.config(newConfig);

    conf.colorOn.should.equal('#fff')
    conf.colorOff.should.equal('#333');
  });

  function mockCanvas() {
    var canvas = document.createElement('canvas');

    canvas.getContext = function() {
      return {
        clearRect: function() { },
        beginPath: function() { },
        arc: function() { },
        closePath: function() { },
        fill: function() { }
      }
    }

    return canvas;
  }
});
