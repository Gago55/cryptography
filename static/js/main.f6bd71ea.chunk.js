(this.webpackJsonpcryptography=this.webpackJsonpcryptography||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(70),n(71),n(43)),l=n(38),u=n(15);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={inputText:""},h=Object(l.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"./app/SETINPUTTEXT":return p({},e,{inputText:t.text});default:return e}}}),m=Object(l.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),y=n(35),T=n(57),x=n.n(T),v=n(139),b=n(134),d=n(138),E=n(136),w=n(137),g=n(135),O=n(20),j=n.n(O),S=n(18),A=n(40),D=function e(t,n){var a=this;Object(A.a)(this,e),this.IPTable=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],this.FPTable=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],this.Key64To28Table1=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36],this.Key64To28Table2=[63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],this.KeyShiftTable=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],this.Key56To48Table=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],this.ETable=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],this.Sboxes=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],this.pTable=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],this.encrypt=function(){a.binarText=a.textToBin(a.text),a.initialText=a.initialPermutation(),a.binarKey=a.textToBin(a.key),a.key28_1=a.key64to28(a.Key64To28Table1),a.key28_2=a.key64to28(a.Key64To28Table2),a.allKeys=a.generateAllKeys(),a.splitText();for(var e=0;e<16;e++)if(15!==e){var t=a.rText,n=a.functionFeistel(a.rText,a.allKeys[e]);a.rText=a.xorReturnArray(a.lText,n),a.lText=t}else{var r=a.functionFeistel(a.rText,a.allKeys[e]);a.lText=a.xorReturnArray(a.lText,r)}var o=[].concat(Object(S.a)(a.lText),Object(S.a)(a.rText));a.encryptedText=a.finalPermutation(o),a.encryptedText=a.encryptedText.join(""),a.encryptedTextHex=a.convertBase(a.encryptedText,2,16)},this.textToBin=function(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]="0"+e.charCodeAt(n).toString(2);if(t.length%8!==0)for(var a=0;a<5;a++)t.push("00000000");return t},this.initialPermutation=function(){for(var e=new Array(64),t=0;t<64;t++)e[t]=a.binarText.join("").charAt(a.IPTable[t]-1);return e},this.finalPermutation=function(e){for(var t=new Array(64),n=0;n<64;n++)t[n]=e.join("").charAt(a.FPTable[n]-1);return t},this.key64to28=function(e){for(var t=new Array(28),n=0;n<28;n++)t[n]=a.binarKey.join("").charAt(e[n]-1);return t},this.generateAllKeys=function(){for(var e=new Array(16),t=0;t<16;t++){a.key28_1=a.leftShiftKey28(a.key28_1,a.KeyShiftTable[t]),a.key28_2=a.leftShiftKey28(a.key28_2,a.KeyShiftTable[t]);var n=a.key28_1.join("")+a.key28_2.join("");e[t]=a.key56to48(n)}return e},this.key56to48=function(e){for(var t=new Array(48),n=0;n<48;n++)t[n]=e.charAt(a.Key56To48Table[n]-1);return t},this.leftShiftKey28=function(e,t){for(var n=0;n<t;n++){for(var a=e[0],r=0;r<e.length-1;r++)e[r]=e[r+1];e[27]=a}return e},this.splitText=function(){a.lText=new Array(32),a.rText=new Array(32);for(var e=0;e<32;e++)a.lText[e]=a.initialText.join("").charAt(e);for(var t=0,n=32;n<64;n++)a.rText[t]=a.initialText.join("").charAt(n),t++},this.functionFeistel=function(e,t){for(var n=a.E(e),r=a.xorReturnString(n,t).match(/.{1,6}/g),o="",c=0;c<8;c++){var i=r[c],l=parseInt(i.charAt(0)+i.charAt(5),2),u=parseInt(i.charAt(1)+i.charAt(2)+i.charAt(3)+i.charAt(4),2),s=a.Sboxes[c][l][u].toString(2);if(s.length%4!==0){for(var p=4-s.length%4,f="",h=0;h<p;h++)f+="0";s=f+s}o+=s}return o=a.PPermutation(o)},this.PPermutation=function(e){for(var t=new Array(32),n=0;n<32;n++)t[n]=e.charAt(a.pTable[n]-1);return t},this.E=function(e){for(var t=new Array(48),n=0;n<48;n++)t[n]=e.join("").charAt(a.ETable[n]-1);return t},this.xorReturnString=function(e,t){var n="";e=e.join(""),t=t.join("");for(var a=0;a<e.length;a++)n+=e[a]^t[a];return n},this.xorReturnArray=function(e,t){var n=new Array(e.length);e=e.join(""),t=t.join("");for(var a=0;a<e.length;a++)n[a]=e[a]^t[a];return n},this.convertBase=function(e,t,n){for(var a,r,o=function(e,t){for(var n=[],a=0;a<e.length;a++)n[a]=parseInt(e.charAt(a),t);return n}(e,t),c=[],i=o.length,l=0;l<i;){for(a=0,r=l;r<i;r++)a=o[r]+a*t,o[r]=Math.floor(a/n),a-=o[r]*n,0==o[r]&&r==l&&l++;c.push(a)}return c.reverse(),function(e,t){for(var n="",a=0;a<e.length;a++)n+=e[a].toString(t);return n}(c,n)},this.text=t,this.key=n,this.encrypt()},I=Object(i.b)((function(e){return{inputText:e.app.inputText}}),(function(e){return{setInputText:function(t){e(function(e){return{type:"./app/SETINPUTTEXT",text:e}}(t))}}}))((function(e){var t=Object(a.useState)("des"),n=Object(y.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),l=Object(y.a)(i,2),u=l[0],s=l[1],p=Object(a.useState)(""),f=Object(y.a)(p,2),h=f[0],m=f[1],T=Object(a.useState)(""),O=Object(y.a)(T,2),S=O[0],A=O[1],I=Object(a.useState)(!0),_=Object(y.a)(I,2),K=_[0],k=_[1];Object(a.useEffect)((function(){k("md5"!==o&&"sha1"!==o&&"sha256"!==o&&"sha512"!==o)}));return r.a.createElement("div",{className:x.a.mainDiv},r.a.createElement(v.a,{id:"standard-basic",label:"Input Text",value:e.inputText,onChange:function(t){e.setInputText(t.target.value)}}),r.a.createElement(b.a,null,r.a.createElement(d.a,{id:"demo-simple-select-label"},"Algorithm"),r.a.createElement(E.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:o,onChange:function(e){c(e.target.value)}},r.a.createElement(w.a,{value:"des"},"DES"),r.a.createElement(w.a,{value:"tripledes"},"TripleDES"),r.a.createElement(w.a,{value:"gdes"},"GDES"),r.a.createElement(w.a,{value:"aes"},"AES"),r.a.createElement(w.a,{value:"rabbit"},"Rabbit"),r.a.createElement(w.a,{value:"md5"},"MD5"),r.a.createElement(w.a,{value:"sha1"},"SHA1"),r.a.createElement(w.a,{value:"sha256"},"SHA256"),r.a.createElement(w.a,{value:"sha512"},"SHA512"))),r.a.createElement("br",null),K&&r.a.createElement(v.a,{id:"standard-basic",label:"Input Key",value:S,onChange:function(e){A(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(g.a,{style:{margin:"15px"},onClick:function(){if("des"===o){var t=performance.now(),n=j.a.DES.encrypt(e.inputText,S),a=performance.now();s(n);var r=(a-t).toFixed(2);m(h+"".concat(o.toUpperCase(),' --\x3e Key:"').concat(S,'" Input:"').concat(e.inputText,'"   Output:"').concat(n,'" Duration ').concat(r,"ms \n"))}else if("tripledes"===o){var c=performance.now(),i=j.a.TripleDES.encrypt(e.inputText,S),l=performance.now();s(i);var u=(l-c).toFixed(2);m(h+"".concat(o.toUpperCase(),' --\x3e Key:"').concat(S,'" Input:"').concat(e.inputText,'"   Output:"').concat(i,'" Duration ').concat(u,"ms \n"))}else if("gdes"===o){var p=performance.now(),f=new D(e.inputText,S),y=performance.now();s(f.encryptedTextHex);var T=(y-p).toFixed(2);m(h+"".concat(o.toUpperCase(),' --\x3e Key:"').concat(S,'" Input:"').concat(e.inputText,'"   Output:"').concat(f.encryptedTextHex,'" Duration ').concat(T,"ms \n"))}else if("aes"===o){var x=performance.now(),v=j.a.AES.encrypt(e.inputText,S),b=performance.now();s(v);var d=(b-x).toFixed(2);m(h+"".concat(o.toUpperCase(),' --\x3e Key:"').concat(S,'" Input:"').concat(e.inputText,'"   Output:"').concat(v,'" Duration ').concat(d,"ms \n"))}else if("rabbit"===o){var E=performance.now(),w=j.a.Rabbit.encrypt(e.inputText,S),g=performance.now();s(w);var O=(g-E).toFixed(2);m(h+"".concat(o.toUpperCase(),' --\x3e Key:"').concat(S,'" Input:"').concat(e.inputText,'"   Output:"').concat(w,'" Duration ').concat(O,"ms \n"))}else if("md5"===o){var A=performance.now(),I=j.a.MD5(e.inputText),_=performance.now();s(I);var K=(_-A).toFixed(2);m(h+"".concat(o.toUpperCase(),' --\x3e Input:"').concat(e.inputText,'"   Hash:"').concat(I,'" Duration ').concat(K,"ms \n"))}else if("sha1"===o){var k=performance.now(),P=j.a.SHA1(e.inputText),C=performance.now();s(P);var F=(C-k).toFixed(2);m(h+"".concat(o.toUpperCase(),' --\x3e Input:"').concat(e.inputText,'"   Hash:"').concat(P,'" Duration ').concat(F,"ms \n"))}else if("sha256"===o){var H=performance.now(),U=j.a.SHA256(e.inputText),R=performance.now();s(U);var N=(R-H).toFixed(2);m(h+"".concat(o.toUpperCase(),' --\x3e Input:"').concat(e.inputText,'"   Hash:"').concat(U,'" Duration ').concat(N,"ms \n"))}else if("sha512"===o){var B=performance.now(),X=j.a.SHA512(e.inputText),M=performance.now();s(X);var L=(M-B).toFixed(2);m(h+"".concat(o.toUpperCase(),' --\x3e Input:"').concat(e.inputText,'"   Hash:"').concat(X,'" Duration ').concat(L,"ms \n"))}}},K?"Encrypt":"Hash"),r.a.createElement("br",null),r.a.createElement(v.a,{id:"outlined-read-only-input",label:"Result",value:u,margin:"normal",multiline:!0,InputProps:{readOnly:!0},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(v.a,{id:"outlined-read-only-input",label:"Logs",value:h,style:{marginTop:"50px"},margin:"normal",multiline:!0,fullWidth:!0,rowsMax:18,InputProps:{readOnly:!0},variant:"outlined"}))}));var _=function(){return r.a.createElement(i.a,{store:m},r.a.createElement("div",{className:"root"},r.a.createElement(I,null),r.a.createElement("a",{target:"_blank",href:"https://www.browserling.com/tools/des-decrypt"},"DES Decryptor"),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:"https://www.browserling.com/tools/triple-des-decrypt"},"TripleDES Decryptor"),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:"http://des.online-domain-tools.com/"},"GDES Decryptor"),r.a.createElement("br",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,n){e.exports={mainDiv:"Cryptography_mainDiv__2av4l"}},65:function(e,t,n){e.exports=n(100)},70:function(e,t,n){},71:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.f6bd71ea.chunk.js.map