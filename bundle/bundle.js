!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=new XMLHttpRequest;r.onload=function(){if(200===r.status){for(var e=JSON.parse(r.responseText),t="",n=0;n<e.entries.length;n++)t+="<tr>",t+="<td> "+e.entries[n].name+" </td>",t+="<td> "+e.entries[n].age+" </td>",t+="</tr>";document.getElementById("app").innerHTML="<table> <tr> <th> NAME </th> <th> AGE </th> "+t+" </table>"}},r.open("GET","data/data.json",!0),r.send(null);window.sortTable=function(e){for(var t=void 0,n=void 0,r=0,a=(document.getElementsByTagName("table"),!0),o="asc";a;){a=!1;var s=document.getElementsByTagName("tr");for(t=1;t<s.length-1;t++){n=!1;var i=s[t].getElementsByTagName("td")[e],l=s[t+1].getElementsByTagName("td")[e];if("asc"==o){if(i.innerHTML.toLowerCase()>l.innerHTML.toLowerCase()){n=!0;break}}else if("desc"==o&&i.innerHTML.toLowerCase()<l.innerHTML.toLowerCase()){n=!0;break}}n?(s[t].parentNode.insertBefore(s[t+1],s[t]),a=!0,r++):0==r&&"asc"==o&&(o="desc",a=!0)}};window.minimumAge=function(){for(var e=document.getElementById("inputAge").value,t=document.querySelector("table").getElementsByTagName("tr"),n=0;n<t.length;n++){var r=t[n].getElementsByTagName("td")[1];r&&(r.innerHTML>=Number(e)?t[n].style.display="":t[n].style.display="none")}}}]);
//# sourceMappingURL=bundle.js.map