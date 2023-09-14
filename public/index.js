"use strict";
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
//get the GET parameters
const urrl = new URL(window.location.href);
const finalparams = urrl.searchParams.get('url')
console.log('got the url: ' + finalparams);

  const url = search(address.value, finalparams);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);