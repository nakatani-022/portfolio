"use strict";

// ハンバーガーメニューの挙動
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

// タブリスト
const tab_all = document.querySelector("#tab_all");
const tab_program = document.querySelector("#tab_program");
const tab_design = document.querySelector("#tab_design");
const check = document.querySelectorAll(".check");




// タブの切り替え
const tab_lists = document.querySelectorAll('.tab_item');

tab_lists[0].classList.add('check');

// thisを使用するためにアロー関数は使用しない
function tab_switch() {
  document.querySelector('.check').classList.remove('check');
  this.classList.add('check');
};

document.addEventListener('DOMContentLoaded', () => {
  for(let i= 0; i < tab_lists.length; i++){
    tab_lists[i].addEventListener('click', tab_switch);
  }
});