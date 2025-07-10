import JustValidate from 'just-validate';

const validator = new JustValidate('#basic_form');
validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上で入力してください。',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '最大入力文字数は15文字です。',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'email',
      errorMessage: '形式が正しくありません。',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'password',
      errorMessage:
        'パスワードは8文字以上で入力してください。その際に数字を1文字以上含める必要があります。',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
      errorMessage: '数字で入力してください。',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '18以上の数字を入力してください。',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '18以上の数字を入力してください。',
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
  ])
  .onSuccess(function (event) {
    let formData = new FormData(event.target);
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('password'));
    console.log(formData.get('age'));
    console.log(formData.get('address'));
  });

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// 1つ目のSwiper
const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  on: {
    init: function () {
      console.log('swiper initialized');
    },
  },
});

let textElement;
// スライドが切り替わったタイミングのイベントを取得
swiper.on('slideChange', function () {
  console.log('slide changed');
  console.log(swiper.activeIndex);
  console.log(swiper.realIndex);

  // スライドキャプションを作成
  const titleContainer = document.getElementById('swiper-title');
  if (textElement != undefined) textElement.remove();
  textElement = document.createTextNode(
    'スライド' + (swiper.realIndex + 1) + 'を表示しています。',
  );
  titleContainer.appendChild(textElement);
});

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  on: {
    init: function () {
      console.log('swiper initialized');
    },
  },
});

let textElement2;
const titleList = [
  '1つめの画像のタイトル',
  '2つめの画像のタイトル',
  '3つめの画像のタイトル',
];

// スライドが切り替わったタイミングのイベントを取得
swiper2.on('slideChange', function () {
  console.log('slide changed');
  console.log(swiper2.activeIndex);
  console.log(swiper2.realIndex);

  // スライドキャプションを作成
  const titleContainer = document.getElementById('swiper-title-2');
  if (textElement2 != undefined) textElement2.remove();
  textElement2 = document.createTextNode(titleList[swiper2.realIndex]);
  titleContainer.appendChild(textElement2);
});
