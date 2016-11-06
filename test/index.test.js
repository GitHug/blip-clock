var chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  scapegoat = require('../index'),
  escape = scapegoat.escape,
  unescape = scapegoat.unescape,
  blip = scapegoat.blip;

before(function () {
  this.jsdom = require('jsdom-global')()
})

after(function () {
  this.jsdom()
})

describe('#escape', function() {
  it('converts & into &amp;', function() {
    escape('&').should.equal('&amp;');
  });

  it('converts " into &quot;', function() {
    escape('"').should.equal('&quot;');
  });

  it('converts \' into &#39;', function() {
    escape('\'').should.equal('&#39;');
  });

  it('converts < into &lt;', function() {
    escape('<').should.equal('&lt;');
  });

  it('converts > into &gt;', function() {
    escape('>').should.equal('&gt;');
  });
});

describe('#unescape', function() {
  it('converts &amp; into &', function() {
    unescape('&amp;').should.equal('&');
  });

  it('converts &quot; into "', function() {
    unescape('&quot;').should.equal('"');
  });

  it('converts &#39; into \'', function() {
    unescape('&#39;').should.equal('\'');
  });

  it('converts &lt; into <', function() {
    unescape('&lt;').should.equal('<');
  });

  it('converts &gt; into >', function() {
    unescape('&gt;').should.equal('>');
  });
});

describe('Blipclock', function() {
  it ('adds a width and height if it is not specified', function() {
    var canvas = document.createElement('canvas');

    expect(canvas.getAttribute('width')).to.be.null;
    expect(canvas.getAttribute('height')).to.be.null;

    blip(canvas)

    canvas.width.should.equal(400);
    canvas.height.should.equal(400);
    canvas.getAttribute('width').should.equal('400');
    canvas.getAttribute('height').should.equal('400');
  });

  it ('keeps height and width if specified', function() {
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', 42);
    canvas.setAttribute('height', 1337);

    blip(canvas);

    canvas.width.should.equal(42);
    canvas.height.should.equal(1337);
    canvas.getAttribute('width').should.equal('42');
    canvas.getAttribute('height').should.equal('1337');
  });
});
