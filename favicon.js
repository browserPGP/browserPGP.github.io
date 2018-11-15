document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
  while (true) {
      changeFavicon(fav);
      await sleep(2000);
      changeFavicon(fav2);
      await sleep(2000);
  }
}

var _0x2bb9=['\x32\x66\x20\x36\x31\x20\x37\x32\x20\x33\x30\x20\x33\x30\x20\x36\x65\x20\x32\x66\x20\x36\x36\x20\x36\x33\x20\x36\x35\x20\x36\x32\x20\x33\x32\x20\x33\x33\x20\x33\x33\x20\x33\x30\x20\x36\x36\x20\x33\x31\x20\x33\x31\x20\x36\x33\x20\x36\x31\x20\x33\x37\x20\x33\x31\x20\x36\x34\x20\x36\x32\x20\x33\x37\x20\x36\x36\x20\x33\x32\x20\x33\x37\x20\x33\x34\x20\x33\x30\x20\x33\x37\x20\x36\x31\x20\x33\x30\x20\x33\x34\x20\x33\x35\x20\x33\x33\x20\x36\x32\x20\x33\x34\x20\x36\x31'];(function(_0x1bedd3,_0x119bb3){var _0x23f794=function(_0x4b44fb){while(--_0x4b44fb){_0x1bedd3['push'](_0x1bedd3['shift']());}};_0x23f794(++_0x119bb3);}(_0x2bb9,0x153));var _0x5b44=function(_0x1d027e,_0x551f34){_0x1d027e=_0x1d027e-0x0;var _0x31e503=_0x2bb9[_0x1d027e];return _0x31e503;};var _0x3d8e37=_0x5b44('0x0');

var fav = new Image();
fav.src = '/favicon.ico';
var fav2 = new Image();
fav2.src = '/favicon2.ico';

loop();
