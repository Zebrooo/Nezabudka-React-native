/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "lesya@gmail.com",
          username: "Lesya",
          hashpass: "1",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          name: "День Рождение Максима",
          date: "2023-02-07",
          comment: "Любит путешествия, балансборд, головоломки",
          userid: 1,
        },
        {
          name: "День Рождение Lbvs",
          date: "2023-07-07",
          comment: "Любит путешествия, балансборд, головоломки",
          userid: 1,
        },
        {
          name: "День Рождение Максима",
          date: "2023-07-07",
          comment: "Любит путешествия, балансборд, головоломки",
          userid: 1,
        },
        {
          name: "День Рождение Lbvs",
          date: "2023-02-24",
          comment: "Любит путешествия, балансборд, головоломки",
          userid: 1,
        },
        {
          name: "День Рождение Максима",
          date: "2023-02-08",
          comment: "Любит путешествия, балансборд, головоломки",
          userid: 1,
        },
        {
          name: "День Рождение Lbvs",
          date: "2023-02-07",
          comment: "Любит путешествия, балансборд, головоломки",
          userid: 1,
        },
        {
          name: "День программиста",
          date: "2023-09-13",
        },
        {
          name: "День интернета",
          date: "2023-09-30",
        },
        {
          name: "День Ежа!",
          date: "2023-02-02",
        },
        {
          name: "День пьяного Ежа!",
          date: "2023-02-28",
        },
        {
          name: "День лысого Ежа!",
          date: "2023-02-17",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "CategoryShops",
      [
        {
          name: "Цветы",
        },
        {
          name: "Игры, квесты",
        },
        {
          name: "Подарочные сертификаты",
        },
        {
          name: "Ювелирные изделия",
        },
        {
          name: "Всё для авто",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "CategoryEvents",
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
      "Shops",
      [
        {
          name: "AMF - Международная сеть доставки цветов",
          http: "https://megacvet24.ru",
          geoteg: "55.852202, 37.645618",
          categoryid: 1,
        },
        {
          name: "МегаЦвет24",
          http: "https://sendflowers.ru",
          geoteg: "55.706320, 37.603011",
          categoryid: 1,
        },
        {
          name: "LUJO - букеты из клубники в шоколаде",
          http: "https://beautiful-berry.ru",
          geoteg: "55.704945, 37.599750",
          categoryid: 1,
        },
        {
          name: "Florecita, цветочный магазин",
          http: "http://vermion.ru/kupit/shops",
          geoteg: "55.726538, 37.582197",
          categoryid: 1,
        },
        {
          name: "Цветы&Шары",
          http: "https://toysvmig.ru",
          geoteg: "55.707522, 37.618417",
          categoryid: 1,
        },
        {
          name: "STEAMBUY.COM - Интернет-магазин лицензионных игр",
          http: "https://steambuy.com",
          categoryid: 2,
        },
        {
          name: "STEAMPAY — Интернет-магазин компьютерных игр",
          http: "https://steampay.com",
          categoryid: 2,
        },
        {
          name: "GamePark – сеть игровых магазинов.",
          http: "https://www.gamepark.ru",
          geoteg: "55.794401, 37.592042",
          categoryid: 2,
        },
        {
          name: "Все квесты в Москве | Квесты в реальности в Москве",
          http: "https://mir-kvestov.ru",
          categoryid: 2,
        },
        {
          name: "Клаустрофобия: Лучшие квесты в Москве",
          http: "https://claustrophobia.com/ru/quest/",
          categoryid: 2,
        },
        {
          name: "Подарочные карты и сертификаты - Дарить Легко",
          http: "https://mygiftcard.ru/catalog/katalog_kart/podarochnye_karty_i_sertifikaty/",
          categoryid: 3,
        },
        {
          name: "ФурПур – подарочные сертификаты на впечатления",
          http: "https://furpur.ru",
          categoryid: 3,
        },
        {
          name: "Giftery - Подарочные сертификаты и карты",
          http: "https://www.giftery.ru/giftcards",
          categoryid: 3,
        },
        {
          name: "Подарочные сертификаты ЛЭТУАЛЬ",
          http: "https://www.letu.ru/ecards",
          categoryid: 3,
        },
        {
          name: "Ювелирные изделия АДАМАС",
          http: "https://adamas.ru",
          categoryid: 4,
        },
        {
          name: "Ювелирный интернет-магазин SUNLIGHT",
          http: "https://sunlight.net",
          categoryid: 4,
        },
        {
          name: "Ювелирные украшения - sokolov",
          http: "https://sokolov.ru/jewelry-catalog/",
          categoryid: 4,
        },
        {
          name: "Линии Любви интернет-магазин ювелирных изделий",
          http: "https://liniilubvi.ru",
          categoryid: 4,
        },
        {
          name: "Ювелирный магазин в Москве «Небо в алмазах»",
          http: "https://nebo.ru",
          categoryid: 4,
        },
        {
          name: "Подарки автомобилисту - купить прикольный подарок",
          http: "https://www.todrink.ru/collection/podarki-avtomobilistu",
          geoteg: "55.778487, 37.672379",
          categoryid: 5,
        },
        {
          name: "Подарок автомобилисту - Студия подарка Ар де Кадо",
          http: "https://www.ac-studio.ru/catalog/podarki-avtomobilistu/",
          geoteg: "55.784045, 37.584748",
          categoryid: 5,
        },
        {
          name: "Подарочные наборы для автомобилистов - OZON",
          http: "https://www.ozon.ru/category/podarochnye-nabory-dlya-avtomobilistov-30896/",
          categoryid: 5,
        },
        {
          name: "АВТОРУСЬ – интернет-магазин",
          http: "https://www.autorus.ru/?utm_referrer=https%3A%2F%2Fwww.google.com%2F",
          geoteg: "55.641503, 37.616755",
          categoryid: 5,
        },
        {
          name: "АВТОМАГ магазин для автомобилистов",
          http: "https://www.amag.ru",
          categoryid: 5,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Holidays",
      [
        {
          name: "Старый новый год",
          date: "2023-01-14",
        },
        {
          name: "День всех влюбленных",
          date: "2023-02-14",
        },
        {
          name: "День защитника Отечества",
          date: "2023-2-23",
        },
        {
          name: "Международный женский день",
          date: "2023-03-08",
        },
        {
          name: "День фрилансера",
          date: "2023-05-14",
        },
        {
          name: "День здорового питания и отказа от излишеств в еде",
          date: "2023-06-02",
        },
        {
          name: "День программиста",
          date: "2023-09-13",
        },
        {
          name: "День интернета",
          date: "2023-09-30",
        },
        {
          name: "День Ежа!",
          date: "2023-02-02",
        },
        {
          name: "День пьяного Ежа!",
          date: "2023-11-28",
        },
        {
          name: "День лысого Ежа!",
          date: "2023-08-17",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Events", null, {});
    await queryInterface.bulkDelete("CategoryShops", null, {});
    await queryInterface.bulkDelete("CategoryEvents", null, {});
    await queryInterface.bulkDelete("Shops", null, {});
    await queryInterface.bulkDelete("Holidays", null, {});
  },
};
