"use strict";

const header_sp = document.querySelector(".headersp");
const header = document.querySelector(".header");
const sp_nav = document.querySelector(".sp_nav");
const sp_menu = document.querySelector(".sp_menu");

const toggle_menu = ()=> {
  header_sp.classList.toggle('close');
  header.classList.toggle('open_menu');
  sp_nav.classList.toggle('open_menu');
  sp_menu.classList.toggle('open_menu');
}

header_sp.addEventListener('click', toggle_menu);
