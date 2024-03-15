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

console.log(tab_design);















const work_box = document.querySelector("#work_box");

const work_cards = [
  {
    info: 'GoogleBooksAPI×React×TypeScript',
    title: '知識の森',
    label: 'Webアプリ',
    url: './work_list/googlebooks.html',
    src: './img/google_books_thumbnail.png',
    type: 'tab_program'
  },
  {
    info: '一般社団法人MBTI連盟',
    title: 'MBTI',
    label: 'Owned Media',
    url: './work_list/mbti.html',
    src: './img/mbti_thumbnail.png',
    type: 'tab_design'
  },
  {
    info: '株式会社サラベル',
    title: 'Sarahbel Inc.',
    label: 'コーポレートサイト',
    url: './work_list/sarahbelInc.html',
    src: './img/sarahbel_thumbnail3.png',
    type: 'tab_design'
  },
  {
    info: 'キャンプサイト',
    title: 'GRAM CAMP SQUARE',
    label: 'コーポレートサイト',
    url: './work_list/gramcampsquare.html',
    src: './img/gram_camp_square_thumbnail.png',
    type: 'tab_design'
  },
  {
    info: 'ガーデンウエディング',
    title: 'Lumiere Naturel',
    label: 'LP',
    url: './work_list/gardenwedding.html',
    src: './img/garden_wedding_thumbnail.png',
    type: 'tab_design'
  },
  {
    info: 'cording',
    title: 'sonozaki corporate',
    label: 'Webサイト',
    url: './work_list/sonozaki_corporate.html',
    src: './img/sonozaki_corporate_thumbnail.png',
    type: 'tab_program'
  },
  {
    info: 'my portfolio',
    title: 'nakatani portfolio',
    label: 'Webサイト',
    url: './work_list/my_portfolio.html',
    src: './img/my_portfolio_thumbnail.png',
    type: 'tab_program',
  },


]


  for(let i=0; i < work_cards.length; i++){
    const {info, title, label, url, src} = work_cards[i];
    const card_create = `<li class="work_card" >
    <a class="work_card_inner" href="${url}"><div class="work_content"><p class="work_info">${info}</p><h3 class="work_lead">${title}</h3><label class="work_label">${label}</label><button class="work_button"><div class="work_button_text">制作実績<span class="work_icon"><img class="work_icon_button" src="./img/Button__Icon.svg" alt=""></span></div></button></div><div class="work_wrapper"><img class="work_thumbnail" src="${src}" alt="キャプチャ:${title}のサムネイル"></div></a>`;

    work_box.insertAdjacentHTML('beforebegin', card_create);
  }


  // タブの切り替え
const tab_lists = document.querySelectorAll('.tab_item');

tab_lists[0].classList.add('check');
  // thisを使用するために関数宣言を使用する
  // タブの切り替えボタン
function tab_switch() {
  document.querySelector('.check').classList.remove('check');
  this.classList.add('check');

  // プログラムタブが選択された場合
  // 配列からtypeとタブの名前が同一ではないものを非表示にする
  if(tab_program.classList.contains('check')){
    for(let i=0; i < work_cards.length; i++){
      document.querySelectorAll('.work_card')[i].style.display = 'block';
      if(work_cards[i].type != 'tab_program'){
        document.querySelectorAll('.work_card')[i].style.display = 'none';
      }
    }
  } else if (tab_design.classList.contains('check')) {
    for(let i=0; i < work_cards.length; i++){
      document.querySelectorAll('.work_card')[i].style.display = 'block';
      if(work_cards[i].type != 'tab_design'){
        document.querySelectorAll('.work_card')[i].style.display = 'none';
      }
    }
  } else {
    for(let i=0; i < work_cards.length; i++){
    document.querySelectorAll('.work_card')[i].style.display = 'block';
  }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  for(let i= 0; i < tab_lists.length; i++){
    tab_lists[i].addEventListener('click', tab_switch);
  }
});

const tab_links = document.querySelectorAll('#tab_link');
console.log(tab_links);

for(let i=0; i < tab_links.length; i++){
 tab_links[i].addEventListener("click", (event)=> {
  event.preventDefault();
})
}
