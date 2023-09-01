"use strict";
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");

  const url = search(address.value, 'https://poki.com');
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
