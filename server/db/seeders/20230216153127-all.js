/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'lesya@gmail.com',
          username: 'Lesya',
          hashpass: '1',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Events',
      [
        {
          name: 'День Рождение Максима',
          date: '2023-07-07',
          comment: 'Любит путешествия, балансборд, головоломки',
          userid: 1,
        },
        {
          name: 'День Рождение Lbvs',
          date: '2023-07-07',
          comment: 'Любит путешествия, балансборд, головоломки',
          userid: 1,
        },
        {
          name: 'День Рождение Максима',
          date: '2023-07-07',
          comment: 'Любит путешествия, балансборд, головоломки',
          userid: 1,
        },
        {
          name: 'День Рождение Lbvs',
          date: '2023-02-24',
          comment: 'Любит путешествия, балансборд, головоломки',
          userid: 1,
        },
        {
          name: 'День Рождение Максима',
          date: '2023-02-08',
          comment: 'Любит путешествия, балансборд, головоломки',
          userid: 1,
        },
        {
          name: 'День Рождение Lbvs',
          date: '2023-02-07',
          comment: 'Любит путешествия, балансборд, головоломки',
          userid: 1,
        },
        {
          name: 'День программиста',
          date: '2023-09-13',
        },
        {
          name: 'День интернета',
          date: '2023-09-30',
        },
        {
          name: 'День Ежа!',
          date: '2023-02-02',
        },
        {
          name: 'День пьяного Ежа!',
          date: '2023-02-28',
        },
        {
          name: 'День лысого Ежа!',
          date: '2023-02-17',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'CategoryShops',
      [
        {
          name: 'Цветы',
          sex: 'woman',
        },
        {
          name: 'Игры, квесты',
          sex: 'unisex',
        },
        {
          name: 'Подарочные сертификаты',
          sex: 'unisex',
        },
        {
          name: 'Ювелирные изделия',
          sex: 'woman',
        },
        {
          name: 'Автотовары',
          sex: 'man',
        },
        {
          name: 'Одежда',
          sex: 'unisex',
        },
        {
          name: 'Парфюмерия',
          sex: 'unisex',
        },
        {
          name: 'Алкоголь',
          sex: 'unisex',
        },
        {
          name: 'Электроника',
          sex: 'unisex',
        },
        {
          name: 'Красота и уход',
          sex: 'woman',
        },
        {
          name: 'Спорт',
          sex: 'unisex',
        },
        {
          name: 'Охота',
          sex: 'man',
        },
        {
          name: 'Рыбалка',
          sex: 'man',
        },
        {
          name: 'Кулинария',
          sex: 'woman',
        },
        {
          name: 'Дом',
          sex: 'unisex',
        },
        {
          name: 'Творчество',
          sex: 'unisex',
        },
        {
          name: 'Игрушки',
          sex: 'man',
        },
        {
          name: 'Лакшери',
          sex: 'unisex',
        },
        {
          name: '',
          sex: '',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'CategoryEvents',
      [
        {
          eventid: 1,
          categoryid: 1,
        },
        {
          eventid: 1,
          categoryid: 2,
        },
        {
          eventid: 1,
          categoryid: 3,
        },
        {
          eventid: 1,
          categoryid: 4,
        },
        {
          eventid: 1,
          categoryid: 5,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Shops',
      [
        {
          name: 'AMF - Международная сеть доставки цветов',
          http: 'https://megacvet24.ru',
          geoteg: '55.852202, 37.645618',
          categoryid: 1,
          img: 'https://megacvet24.ru/image/catalog/logo_1,5.png',
        },
        {
          name: 'МегаЦвет24',
          http: 'https://sendflowers.ru',
          geoteg: '55.706320, 37.603011',
          categoryid: 1,
          img: 'https://sendflowers.ru/images/site/692.webp?1676966467',
        },
        {
          name: 'LUJO - букеты из клубники в шоколаде',
          http: 'https://beautiful-berry.ru',
          geoteg: '55.704945, 37.599750',
          categoryid: 1,
          img: 'https://beautiful-berry.ru/img/promo/product.png',
        },
        {
          name: 'Slava Rosca',
          http: 'http://vermion.ru/kupit/shops',
          geoteg: '55.726538, 37.582197',
          categoryid: 1,
          img: 'http://slavarosca.ru/sites/default/files/styles/slider_image/public/RoscaSchool.jpg?itok=zuHL2Xrt',
        },
        {
          name: 'Цветы&Шары',
          http: 'https://toysvmig.ru',
          geoteg: '55.707522, 37.618417',
          categoryid: 1,
          img: 'https://toysvmig.ru/image/cache/data/banner/slide-3-868x375.jpg?1676982158306',
        },
        {
          name: 'STEAMBUY.COM - Интернет-магазин лицензионных игр',
          http: 'https://steambuy.com',
          categoryid: 2,
          img: 'https://steambuy.com/_templates/img/svg/logo1.svg',
        },
        {
          name: 'STEAMPAY — Интернет-магазин компьютерных игр',
          http: 'https://steampay.com',
          categoryid: 2,
          img: 'https://steampay.com/image/hogwarts-legacy.jpg?1671948853',
        },
        {
          name: 'GamePark – сеть игровых магазинов.',
          http: 'https://www.gamepark.ru',
          geoteg: '55.794401, 37.592042',
          categoryid: 2,
          img: 'https://www.gamepark.ru/local/templates/gp_new/images/logo-new.png',
        },
        {
          name: 'Все квесты в Москве | Квесты в реальности в Москве',
          http: 'https://mir-kvestov.ru',
          categoryid: 2,
          img: 'https://mir-kvestov.ru/uploads/quests/14497/medium/warnerquest_mortir_photo1.jpg?1643802612',
        },
        {
          name: 'Клаустрофобия: Лучшие квесты в Москве',
          http: 'https://claustrophobia.com/ru/quest/',
          categoryid: 2,
          img: 'https://media.claustrophobia.com/media/cache/b2/95/b295e55d5d10a589a3d9c0425ab3658f.jpg',
        },
        {
          name: 'Подарочные карты и сертификаты - Дарить Легко',
          http: 'https://mygiftcard.ru/catalog/katalog_kart/podarochnye_karty_i_sertifikaty/',
          categoryid: 3,
          img: 'https://mygiftcard.ru/local/templates/easygive_new2020/dist/img/logo.svg',
        },
        {
          name: 'ФурПур – подарочные сертификаты на впечатления',
          http: 'https://furpur.ru',
          categoryid: 3,
          img: 'https://www.msk.emotioncity.ru/image/oraz-sef22.jpg',
        },
        {
          name: 'Giftery - Подарочные сертификаты и карты',
          http: 'https://www.giftery.ru/giftcards',
          categoryid: 3,
          img: 'https://www.giftery.ru/img/common/GC.png',
        },
        {
          name: 'Подарочные сертификаты ЛЭТУАЛЬ',
          http: 'https://www.letu.ru/ecards',
          categoryid: 3,
          img: 'https://www.letu.ru/common/img/staticContent/giftCards/giftcert2_up.jpg',
        },
        {
          name: 'Ювелирные изделия АДАМАС',
          http: 'https://adamas.ru',
          categoryid: 4,
          img: 'https://rest.adamas.ru/bnr/sphere-collection-main-desk_desktop_3y74.jpg',
        },
        {
          name: 'Ювелирный интернет-магазин SUNLIGHT',
          http: 'https://sunlight.net',
          categoryid: 4,
          img: 'https://bestbenefits.ru/storage/products/March2022/oFeiwg7HtX3KxoYDL4dv.jpg',
        },
        {
          name: 'Ювелирные украшения - sokolov',
          http: 'https://sokolov.ru/jewelry-catalog/',
          categoryid: 4,
          img: 'https://berezkagold.ru/image/catalog/banery/Sokolov_new_logo.jpg',
        },
        {
          name: 'Линии Любви интернет-магазин ювелирных изделий',
          http: 'https://liniilubvi.ru',
          categoryid: 4,
          img: 'https://skidkimira.ru/images/company/f179c253-6124-4214-b3ee-10844997c9bd.JPG',
        },
        {
          name: 'Ювелирный магазин в Москве «Небо в алмазах»',
          http: 'https://nebo.ru',
          categoryid: 4,
          img: 'https://uvelir.info/media/xvn/content/logo_4_460.jpg',
        },
        {
          name: 'Подарки автомобилисту - купить прикольный подарок',
          http: 'https://www.todrink.ru/collection/podarki-avtomobilistu',
          geoteg: '55.778487, 37.672379',
          categoryid: 5,
          img: 'https://1gai.ru/uploads/posts/2018-07/1530791481_gf.jpg',
        },
        {
          name: 'Подарок автомобилисту - Студия подарка Ар де Кадо',
          http: 'https://www.ac-studio.ru/catalog/podarki-avtomobilistu/',
          geoteg: '55.784045, 37.584748',
          categoryid: 5,
          img: 'https://1gai.ru/uploads/posts/2018-07/1530791481_gf.jpg',
        },
        {
          name: 'Подарочные наборы для автомобилистов - OZON',
          http: 'https://www.ozon.ru/category/podarochnye-nabory-dlya-avtomobilistov-30896/',
          categoryid: 5,
          img: 'https://1gai.ru/uploads/posts/2018-07/1530791481_gf.jpg',
        },
        {
          name: 'АВТОРУСЬ – интернет-магазин',
          http: 'https://www.autorus.ru/?utm_referrer=https%3A%2F%2Fwww.google.com%2F',
          geoteg: '55.641503, 37.616755',
          categoryid: 5,
          img: 'https://1gai.ru/uploads/posts/2018-07/1530791481_gf.jpg',
        },
        {
          name: 'АВТОМАГ магазин для автомобилистов',
          http: 'https://www.amag.ru',
          categoryid: 5,
          img: 'https://1gai.ru/uploads/posts/2018-07/1530791481_gf.jpg',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Holidays',
      [
        {
          name: 'Старый новый год',
          date: '2023-01-14',
        },
        {
          name: 'День всех влюбленных',
          date: '2023-02-14',
        },
        {
          name: 'День защитника Отечества',
          date: '2023-2-23',
        },
        {
          name: 'Международный женский день',
          date: '2023-03-08',
        },
        {
          name: 'День фрилансера',
          date: '2023-05-14',
        },
        {
          name: 'День здорового питания и отказа от излишеств в еде',
          date: '2023-06-02',
        },
        {
          name: 'День программиста',
          date: '2023-09-13',
        },
        {
          name: 'День интернета',
          date: '2023-09-30',
        },
        {
          name: 'День Ежа!',
          date: '2023-02-02',
        },
        {
          name: 'День пьяного Ежа!',
          date: '2023-11-28',
        },
        {
          name: 'День лысого Ежа!',
          date: '2023-08-17',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Events', null, {});
    await queryInterface.bulkDelete('CategoryShops', null, {});
    await queryInterface.bulkDelete('CategoryEvents', null, {});
    await queryInterface.bulkDelete('Shops', null, {});
    await queryInterface.bulkDelete('Holidays', null, {});
  },
};
