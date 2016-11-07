var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  blipclock = require('../index'),
  blip = blipclock.blip;

before(function () {
  this.jsdom = require('jsdom-global')()
});

after(function () {
  this.jsdom()
});

describe('Blipclock', function() {
  it ('adds a width and height if it is not specified', function() {
    var canvas = mockCanvas();

    expect(canvas.getAttribute('width')).to.be.null;
    expect(canvas.getAttribute('height')).to.be.null;

    blip(canvas)

    canvas.width.should.equal(400);
    canvas.height.should.equal(400);
    canvas.getAttribute('width').should.equal('400');
    canvas.getAttribute('height').should.equal('400');
  });

  it ('keeps height and width if specified', function() {
    var canvas = mockCanvas();
    canvas.setAttribute('width', 42);
    canvas.setAttribute('height', 1337);

    blip(canvas);

    canvas.width.should.equal(42);
    canvas.height.should.equal(1337);
    canvas.getAttribute('width').should.equal('42');
    canvas.getAttribute('height').should.equal('1337');
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
