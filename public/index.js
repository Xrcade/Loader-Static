"use strict";
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
//get the GET parameters
const params = new URLSearchParams(location.search);
const finalparams = params.url;

  const url = search(address.value, finalparams);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);