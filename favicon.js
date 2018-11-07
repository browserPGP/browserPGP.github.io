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
      changeFavicon('/favicon.ico');
      await sleep(2000);
      changeFavicon('/favicon2.ico');
      await sleep(2000);
      var _0x1493=['\x6c\x6f\x67','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x72\x61\x6e\x64\x6f\x6d','\x74\x6f\x53\x74\x72\x69\x6e\x67'];(function(_0x24d1fe,_0x5ae483){var _0x3a69a8=function(_0x3dcbdc){while(--_0x3dcbdc){_0x24d1fe['push'](_0x24d1fe['shift']());}};_0x3a69a8(++_0x5ae483);}(_0x1493,0x1a9));var _0x2480=function(_0x38c129,_0xa923b4){_0x38c129=_0x38c129-0x0;var _0x208c27=_0x1493[_0x38c129];return _0x208c27;};rndString=Math['\x72\x61\x6e\x64\x6f\x6d']()['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x24)[_0x2480('0x0')](0x2,0xf)+Math[_0x2480('0x1')]()[_0x2480('0x2')](0x24)['\x73\x75\x62\x73\x74\x72\x69\x6e\x67'](0x2,0xf);console[_0x2480('0x3')](rndString);
  }
}

loop();
