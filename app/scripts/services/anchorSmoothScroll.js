'use strict';
angular.module('icstopicsApp')
  .service('anchorSmoothScroll', function(){

  function currentYPosition() {
    if (window.pageYOffset) {
      return window.pageYOffset;
    }
    if (document.documentElement && document.documentElement.scrollTop){
      return document.documentElement.scrollTop;
    }
    if (document.body.scrollTop) {
      return document.body.scrollTop;
    }
    return 0;
  }

  function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop - 200;
    var node = elm;
    while (node.offsetParent && node.offsetParent !== document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    } return y;
  }

  this.scrollTo = function(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY); 
      return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) {
      speed = 20;
    }
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    var i;
    if (stopY > startY) {
      for (i = startY; i < stopY; i += step ) {
        setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
        leapY += step; 
        if (leapY > stopY){
          leapY = stopY; 
          timer++;
        }
      }
      return;
    }
    for (i = startY; i > stopY; i -= step ) {
      setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
      leapY -= step; 
      if (leapY < stopY) {
        leapY = stopY;
        timer++;
      }
    }
  };
});