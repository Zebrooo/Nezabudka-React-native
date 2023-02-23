/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "lesya777@gmail.com",
          username: "Ёж Леся Бабец",
          hashpass: "1",
        },
        {
          email: "l@gmail.com",
          username: "Ёж Дмитрий Ерёмин",
          hashpass: "1",
        },
        {
          email: "le@gmail.com",
          username: "Ёж Максим Флягин",
          hashpass: "1",
        },
        {
          email: "les@gmail.com",
          username: "Ёж Роман Сергеевич",
          hashpass: "1",
        },
        {
          email: "lesy@gmail.com",
          username: "Ёж Александр Фролов",
          hashpass: "1",
        },
        {
          email: "mur@gmail.com",
          username: "Ёж Алексей Грязнев",
          hashpass: "1",
        },
        {
          email: "mur1@gmail.com",
          username: "Ёж Андрей Нгуев",
          hashpass: "1",
        },
        {
          email: "mur2@gmail.com",
          username: "Ёж Георгий Пискарев",
          hashpass: "1",
        },
        {
          email: "mur3@gmail.com",
          username: "Ёж Максим Грушецкий",
          hashpass: "1",
        },
        {
          email: "mur4@gmail.com",
          username: "Ёж Денис Петров",
          hashpass: "1",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          name: "День всех влюбленных",
          date: "2023-02-14",
        },
        {
          name: "День защитника Отечества",
          date: "2023-02-23",
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
        {
          name: "Всемирный день писателя!",
          date: "2023-03-03",
        },
        {
          name: "Всемирный день поэзии!",
          date: "2023-03-21",
        },
        {
          name: "Всемирный День защиты прав потребителей!",
          date: "2023-03-15",
        },
        
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "CategoryShops",
      [
        {
          name: "Цветы",
          sex: "woman",
        },
        {
          name: "Игры, квесты",
          sex: "unisex",
        },
        {
          name: "Подарочные сертификаты",
          sex: "unisex",
        },
        {
          name: "Ювелирные изделия",
          sex: "woman",
        },
        {
          name: "Автотовары",
          sex: "man",
        },
        {
          name: "Одежда",
          sex: "unisex",
        },
        {
          name: "Парфюмерия",
          sex: "unisex",
        },
        {
          name: "Алкоголь",
          sex: "unisex",
        },
        {
          name: "Электроника",
          sex: "unisex",
        },
        {
          name: "Красота и уход",
          sex: "woman",
        },
        {
          name: "Спорт",
          sex: "unisex",
        },
        {
          name: "Охота",
          sex: "man",
        },
        {
          name: "Рыбалка",
          sex: "man",
        },
        {
          name: "Кулинария",
          sex: "woman",
        },
        {
          name: "Дом",
          sex: "unisex",
        },
        {
          name: "Творчество",
          sex: "unisex",
        },
        {
          name: "Игрушки",
          sex: "man",
        },
        {
          name: "Лакшери",
          sex: "unisex",
        },
        {
          name: "",
          sex: "",
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
          img: "https://megacvet24.ru/image/catalog/logo_1,5.png",
        },
        {
          name: "МегаЦвет24",
          http: "https://sendflowers.ru",
          geoteg: "55.706320, 37.603011",
          categoryid: 1,
          img: "https://sendflowers.ru/images/site/692.webp?1676966467",
        },
        {
          name: "LUJO - букеты из клубники в шоколаде",
          http: "https://beautiful-berry.ru",
          geoteg: "55.704945, 37.599750",
          categoryid: 1,
          img: "https://beautiful-berry.ru/img/promo/product.png",
        },
        {
          name: "Slava Rosca",
          http: "http://vermion.ru/kupit/shops",
          geoteg: "55.726538, 37.582197",
          categoryid: 1,
          img: "http://slavarosca.ru/sites/default/files/styles/slider_image/public/RoscaSchool.jpg?itok=zuHL2Xrt",
        },
        {
          name: "Цветы&Шары",
          http: "https://toysvmig.ru",
          geoteg: "55.707522, 37.618417",
          categoryid: 1,
          img: "https://toysvmig.ru/image/cache/data/banner/slide-3-868x375.jpg?1676982158306",
        },
        {
          name: "STEAMBUY.COM - Интернет-магазин лицензионных игр",
          http: "https://steambuy.com",
          categoryid: 2,
          img: "https://steambuy.com/_templates/img/svg/logo1.svg",
        },
        {
          name: "STEAMPAY — Интернет-магазин компьютерных игр",
          http: "https://steampay.com",
          categoryid: 2,
          img: "https://steampay.com/image/hogwarts-legacy.jpg?1671948853",
        },
        {
          name: "GamePark – сеть игровых магазинов.",
          http: "https://www.gamepark.ru",
          geoteg: "55.794401, 37.592042",
          categoryid: 2,
          img: "https://www.gamepark.ru/local/templates/gp_new/images/logo-new.png",
        },
        {
          name: "Все квесты в Москве | Квесты в реальности в Москве",
          http: "https://mir-kvestov.ru",
          categoryid: 2,
          img: "https://mir-kvestov.ru/uploads/quests/14497/medium/warnerquest_mortir_photo1.jpg?1643802612",
        },
        {
          name: "Клаустрофобия: Лучшие квесты в Москве",
          http: "https://claustrophobia.com/ru/quest/",
          categoryid: 2,
          img: "https://media.claustrophobia.com/media/cache/b2/95/b295e55d5d10a589a3d9c0425ab3658f.jpg",
        },
        {
          name: "Подарочные карты и сертификаты - Дарить Легко",
          http: "https://mygiftcard.ru/catalog/katalog_kart/podarochnye_karty_i_sertifikaty/",
          categoryid: 3,
          img: "https://mygiftcard.ru/local/templates/easygive_new2020/dist/img/logo.svg",
        },
        {
          name: "ФурПур – подарочные сертификаты на впечатления",
          http: "https://furpur.ru",
          categoryid: 3,
          img: "https://www.msk.emotioncity.ru/image/oraz-sef22.jpg",
        },
        {
          name: "Giftery - Подарочные сертификаты и карты",
          http: "https://www.giftery.ru/giftcards",
          categoryid: 3,
          img: "https://www.giftery.ru/img/common/GC.png",
        },
        {
          name: "Подарочные сертификаты ЛЭТУАЛЬ",
          http: "https://www.letu.ru/ecards",
          categoryid: 3,
          img: "https://www.letu.ru/common/img/staticContent/giftCards/giftcert2_up.jpg",
        },
        {
          name: "Ювелирные изделия АДАМАС",
          http: "https://adamas.ru",
          categoryid: 4,
          img: "https://rest.adamas.ru/bnr/sphere-collection-main-desk_desktop_3y74.jpg",
        },
        {
          name: "Ювелирный интернет-магазин SUNLIGHT",
          http: "https://sunlight.net",
          categoryid: 4,
          img: "https://bestbenefits.ru/storage/products/March2022/oFeiwg7HtX3KxoYDL4dv.jpg",
        },
        {
          name: "Ювелирные украшения - sokolov",
          http: "https://sokolov.ru/jewelry-catalog/",
          categoryid: 4,
          img: "https://berezkagold.ru/image/catalog/banery/Sokolov_new_logo.jpg",
        },
        {
          name: "Линии Любви интернет-магазин ювелирных изделий",
          http: "https://liniilubvi.ru",
          categoryid: 4,
          img: "https://skidkimira.ru/images/company/f179c253-6124-4214-b3ee-10844997c9bd.JPG",
        },
        {
          name: "Ювелирный магазин в Москве «Небо в алмазах»",
          http: "https://nebo.ru",
          categoryid: 4,
          img: "https://uvelir.info/media/xvn/content/logo_4_460.jpg",
        },
        {
          name: "Подарки автомобилисту - купить прикольный подарок",
          http: "https://www.todrink.ru/collection/podarki-avtomobilistu",
          geoteg: "55.778487, 37.672379",
          categoryid: 5,
          img: "https://1gai.ru/uploads/posts/2018-07/1530791481_gf.jpg",
        },
        {
          name: "Подарок автомобилисту - Студия подарка Ар де Кадо",
          http: "https://www.ac-studio.ru/catalog/podarki-avtomobilistu/",
          geoteg: "55.784045, 37.584748",
          categoryid: 5,
          img: "https://1gai.ru/uploads/posts/2018-07/1530791481_gf.jpg",
        },
        {
          name: "Подарочные наборы для автомобилистов - OZON",
          http: "https://www.ozon.ru/category/podarochnye-nabory-dlya-avtomobilistov-30896/",
          categoryid: 5,
          img: "https://1gai.ru/uploads/posts/2018-07/1530791481_gf.jpg",
        },
        {
          name: "АВТОРУСЬ – интернет-магазин",
          http: "https://www.autorus.ru/?utm_referrer=https%3A%2F%2Fwww.google.com%2F",
          geoteg: "55.641503, 37.616755",
          categoryid: 5,
          img: "https://1gai.ru/uploads/posts/2018-07/1530791481_gf.jpg",
        },
        {
          name: "АВТОМАГ магазин для автомобилистов",
          http: "https://www.amag.ru",
          categoryid: 5,
          img: "https://1gai.ru/uploads/posts/2018-07/1530791481_gf.jpg",
        },

        {
          name: "«Ароматный мир»",
          http: "https://amwine.ru",
          geoteg: 'Шаболовка ул., д. 65, корп. 1, Москва, 123056',
          categoryid: 8,
          img: "https://tadviser.ru/images/1/18/Ароматный_мир.png",
        },
        {
          name: "ВинЛаб",
          http: "https://amwine.ru",
          geoteg: 'проспект Ленинградский, 52, Москва, 119333',
          categoryid: 8,
          img: "https://api.halvacard.ru/public-api/files/9d328474-dc61-49fd-bab9-1c4e427d13e1.png",
        },
        {
          name: "Красное&Белое",
          http: "https://krasnoeibeloe.ru",
          geoteg: 'пр. 60-летия Октября, 19, Москва, 117312',
          categoryid: 8,
          img: "https://krasnoeibeloe.servicecdn.ru/local/templates/.default/img/logokb-2022.jpg",
        },
        {
          name: "Винотеки SimpleWine",
          http: "https://simplewine.ru",
          geoteg: 'Ленинский пр-т., 30, Москва, 119334',
          categoryid: 8,
          img: "https://s.rbk.ru/v1_companies_s3/resized/960xH/media/trademarks/118a202e-3579-4019-8d4d-b2b10517bca0.jpg",
        },
        {
          name: "WineStyle - сеть винных магазинов",
          http: "https://winestyle.ru",
          geoteg: 'Ленинский пр-т., 52, Москва, 119333',
          categoryid: 8,
          img: "https://bestbenefits.ru/storage/products/January2022/rLY5ZCCNiz5eOOxwiI80.jpg",
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
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Букет 'Сочный Всплеск' в ящике",
          img: "https://megacvet24.ru/image/cache/catalog/sochnyy-vsplesk-v-yashchike-99-405x405.jpg",
          price: 6899,
          shopid: "1",
        },
        {
          name: 'Букет "Вишнёвая Пудра"',
          img: "https://megacvet24.ru/image/cache/catalog/buket-vishnyovaya-pudra-405x405.jpg",
          price: 2299,
          shopid: "1",
        },
        {
          name: 'Букет "Алиса"',
          img: "https://megacvet24.ru/image/cache/catalog/alisa-0-405x405.jpg",
          price: 3399,
          shopid: "1",
        },
        {
          name: 'Букет "Белые Розы и Альстромерии" в коробке',
          img: "https://megacvet24.ru/image/cache/catalog/belye-rozy-i-alstromerii-v-korobke-00-405x405.jpg",
          price: 3799,
          shopid: "1",
        },
        {
          name: '9 Тюльпанов и Гиацинтов',
          img: "https://megacvet24.ru/image/cache/catalog/9-tyulpanov-giacint-0-405x405.jpg",
          price: 2899,
          shopid: "1",
        },

        {
          name: "Букет 'Сочный Всплеск' в ящике",
          img: "https://megacvet24.ru/image/cache/catalog/sochnyy-vsplesk-v-yashchike-99-405x405.jpg",
          price: 6899,
          shopid: "2",
        },
        {
          name: 'Букет "Вишнёвая Пудра"',
          img: "https://megacvet24.ru/image/cache/catalog/buket-vishnyovaya-pudra-405x405.jpg",
          price: 2299,
          shopid: "2",
        },
        {
          name: 'Букет "Алиса"',
          img: "https://megacvet24.ru/image/cache/catalog/alisa-0-405x405.jpg",
          price: 3399,
          shopid: "2",
        },
        {
          name: 'Букет "Белые Розы и Альстромерии" в коробке',
          img: "https://megacvet24.ru/image/cache/catalog/belye-rozy-i-alstromerii-v-korobke-00-405x405.jpg",
          price: 3799,
          shopid: "2",
        },
        {
          name: '9 Тюльпанов и Гиацинтов',
          img: "https://megacvet24.ru/image/cache/catalog/9-tyulpanov-giacint-0-405x405.jpg",
          price: 2899,
          shopid: "2",
        },

        {
          name: "Букет 'Сочный Всплеск' в ящике",
          img: "https://megacvet24.ru/image/cache/catalog/sochnyy-vsplesk-v-yashchike-99-405x405.jpg",
          price: 6899,
          shopid: "3",
        },
        {
          name: 'Букет "Вишнёвая Пудра"',
          img: "https://megacvet24.ru/image/cache/catalog/buket-vishnyovaya-pudra-405x405.jpg",
          price: 2299,
          shopid: "3",
        },
        {
          name: 'Букет "Алиса"',
          img: "https://megacvet24.ru/image/cache/catalog/alisa-0-405x405.jpg",
          price: 3399,
          shopid: "3",
        },
        {
          name: 'Букет "Белые Розы и Альстромерии" в коробке',
          img: "https://megacvet24.ru/image/cache/catalog/belye-rozy-i-alstromerii-v-korobke-00-405x405.jpg",
          price: 3799,
          shopid: "3",
        },
        {
          name: '9 Тюльпанов и Гиацинтов',
          img: "https://megacvet24.ru/image/cache/catalog/9-tyulpanov-giacint-0-405x405.jpg",
          price: 2899,
          shopid: "3",
        },

        {
          name: "Букет 'Сочный Всплеск' в ящике",
          img: "https://megacvet24.ru/image/cache/catalog/sochnyy-vsplesk-v-yashchike-99-405x405.jpg",
          price: 6899,
          shopid: "4",
        },
        {
          name: 'Букет "Вишнёвая Пудра"',
          img: "https://megacvet24.ru/image/cache/catalog/buket-vishnyovaya-pudra-405x405.jpg",
          price: 2299,
          shopid: "4",
        },
        {
          name: 'Букет "Алиса"',
          img: "https://megacvet24.ru/image/cache/catalog/alisa-0-405x405.jpg",
          price: 3399,
          shopid: "4",
        },
        {
          name: 'Букет "Белые Розы и Альстромерии" в коробке',
          img: "https://megacvet24.ru/image/cache/catalog/belye-rozy-i-alstromerii-v-korobke-00-405x405.jpg",
          price: 3799,
          shopid: "4",
        },
        {
          name: '9 Тюльпанов и Гиацинтов',
          img: "https://megacvet24.ru/image/cache/catalog/9-tyulpanov-giacint-0-405x405.jpg",
          price: 2899,
          shopid: "4",
        },

        {
          name: "Букет 'Сочный Всплеск' в ящике",
          img: "https://megacvet24.ru/image/cache/catalog/sochnyy-vsplesk-v-yashchike-99-405x405.jpg",
          price: 6899,
          shopid: "5",
        },
        {
          name: 'Букет "Вишнёвая Пудра"',
          img: "https://megacvet24.ru/image/cache/catalog/buket-vishnyovaya-pudra-405x405.jpg",
          price: 2299,
          shopid: "5",
        },
        {
          name: 'Букет "Алиса"',
          img: "https://megacvet24.ru/image/cache/catalog/alisa-0-405x405.jpg",
          price: 3399,
          shopid: "5",
        },
        {
          name: 'Букет "Белые Розы и Альстромерии" в коробке',
          img: "https://megacvet24.ru/image/cache/catalog/belye-rozy-i-alstromerii-v-korobke-00-405x405.jpg",
          price: 3799,
          shopid: "5",
        },
        {
          name: '9 Тюльпанов и Гиацинтов',
          img: "https://megacvet24.ru/image/cache/catalog/9-tyulpanov-giacint-0-405x405.jpg",
          price: 2899,
          shopid: "5",
        },

        {
          name: 'Arma 3',
          img: "https://steammachine.ru/slider/2275505-339x194.webp",
          price: 999,
          shopid: "6",
        },
        {
          name: 'Disciples: Liberation / Disciples: Освобождение',
          img: "https://steammachine.ru/slider/3227877-339x194.webp",
          price: 499,
          shopid: "6",
        },
        {
          name: 'Fallout: New Vegas',
          img: "https://steammachine.ru/slider/1338013-462x264.webp",
          price: 59,
          shopid: "6",
        },
        {
          name: 'Hogwarts Legacy / Хогвартс. Наследие',
          img: "https://steammachine.ru/slider/3431128-462x264.webp",
          price: 2499,
          shopid: "6",
        },
        {
          name: 'Hi-Fi RUSH',
          img: "https://steammachine.ru/slider/3616832-339x194.webp",
          price: 2199,
          shopid: "6",
        },

        {
          name: 'Arma 3',
          img: "https://steammachine.ru/slider/2275505-339x194.webp",
          price: 999,
          shopid: "7",
        },
        {
          name: 'Disciples: Liberation / Disciples: Освобождение',
          img: "https://steammachine.ru/slider/3227877-339x194.webp",
          price: 499,
          shopid: "7",
        },
        {
          name: 'Fallout: New Vegas',
          img: "https://steammachine.ru/slider/1338013-462x264.webp",
          price: 59,
          shopid: "7",
        },
        {
          name: 'Hogwarts Legacy / Хогвартс. Наследие',
          img: "https://steammachine.ru/slider/3431128-462x264.webp",
          price: 2499,
          shopid: "7",
        },
        {
          name: 'Hi-Fi RUSH',
          img: "https://steammachine.ru/slider/3616832-339x194.webp",
          price: 2199,
          shopid: "7",
        },

        {
          name: 'Arma 3',
          img: "https://steammachine.ru/slider/2275505-339x194.webp",
          price: 999,
          shopid: "8",
        },
        {
          name: 'Disciples: Liberation / Disciples: Освобождение',
          img: "https://steammachine.ru/slider/3227877-339x194.webp",
          price: 499,
          shopid: "8",
        },
        {
          name: 'Fallout: New Vegas',
          img: "https://steammachine.ru/slider/1338013-462x264.webp",
          price: 59,
          shopid: "8",
        },
        {
          name: 'Hogwarts Legacy / Хогвартс. Наследие',
          img: "https://steammachine.ru/slider/3431128-462x264.webp",
          price: 2499,
          shopid: "8",
        },
        {
          name: 'Hi-Fi RUSH',
          img: "https://steammachine.ru/slider/3616832-339x194.webp",
          price: 2199,
          shopid: "8",
        },

        {
          name: 'Квест-Перформанс Приют',
          img: "https://mir-kvestov.ru/uploads/quests/17284/large/quest_stars_priut_photo1.JPG?1673534163",
          price: 6000,
          shopid: "9",
        },
        {
          name: 'Квест Охотники за искусством',
          img: "https://mir-kvestov.ru/uploads/quests/18192/large/questreality_fart_photo1.jpg?1653303177",
          price: 3000,
          shopid: "9",
        },
        {
          name: 'Проклятие монахини',
          img: "https://mir-kvestov.ru/uploads/quests/18015/large/quest_stars_proklyatie_monahini_photo1.jpg?1651039365",
          price: 5000,
          shopid: "9",
        },
        {
          name: 'Тайна четырех жрецов',
          img: "https://mir-kvestov.ru/uploads/quests/7137/large/trikvestr_taina_chetyreh_zhretsov_photo1.jpg?1643776763",
          price: 4000,
          shopid: "9",
        },
        {
          name: 'Тайны старой избушки',
          img: "https://mir-kvestov.ru/uploads/quests/8728/large/qwestern_mara_strashnaya_skazka_photo2.jpg?1643782926",
          price: 4500,
          shopid: "9",
        },

        {
          name: 'Квест-Перформанс Приют',
          img: "https://mir-kvestov.ru/uploads/quests/17284/large/quest_stars_priut_photo1.JPG?1673534163",
          price: 6000,
          shopid: "10",
        },
        {
          name: 'Квест Охотники за искусством',
          img: "https://mir-kvestov.ru/uploads/quests/18192/large/questreality_fart_photo1.jpg?1653303177",
          price: 3000,
          shopid: "10",
        },
        {
          name: 'Проклятие монахини',
          img: "https://mir-kvestov.ru/uploads/quests/18015/large/quest_stars_proklyatie_monahini_photo1.jpg?1651039365",
          price: 5000,
          shopid: "10",
        },
        {
          name: 'Тайна четырех жрецов',
          img: "https://mir-kvestov.ru/uploads/quests/7137/large/trikvestr_taina_chetyreh_zhretsov_photo1.jpg?1643776763",
          price: 4000,
          shopid: "10",
        },
        {
          name: 'Тайны старой избушки',
          img: "https://mir-kvestov.ru/uploads/quests/8728/large/qwestern_mara_strashnaya_skazka_photo2.jpg?1643782926",
          price: 4500,
          shopid: "10",
        },

        {
          name: 'Стрелковый клуб «Объект» (Современное оружие)',
          img: "https://mygiftcard.ru/upload/resize_cache/iblock/156/310_195_1/1569f338a621bd0085c0cf61382fad60.png.webp",
          price: 8900,
          shopid: "11",
        },
        {
          name: 'Моя консоль',
          img: "https://mygiftcard.ru/upload/resize_cache/iblock/f52/310_195_1/f529cb1f0c4521ae09b0bc3f61d8fb51.png.webp",
          price: 1000,
          shopid: "11",
        },
        {
          name: 'Tasty Coffee',
          img: "https://mygiftcard.ru/upload/resize_cache/iblock/12e/310_195_1/12e626e7a6fc756fa17ddcbd8480e36d.png.webp",
          price: 1000,
          shopid: "11",
        },
        {
          name: 'Шефмаркет',
          img: "https://mygiftcard.ru/upload/resize_cache/iblock/388/310_195_1/q3ii4q73f0x2u2yjy3z35ykairrv12np.png.webp",
          price: 1000,
          shopid: "11",
        },
        {
          name: 'Универсальная карта "Beauty&SPA"',
          img: "https://mygiftcard.ru/upload/resize_cache/iblock/57f/310_195_1/kn957cyrqsvxyywaxfnsn264to0hl8t9.png.webp",
          price: 1000,
          shopid: "11",
        },

        {
          name: 'Cпуск над Москва-рекой',
          img: "https://furpur.ru/upload/resize_cache/uf/7cf/720_405_2/zip.jpg",
          price: 5000,
          shopid: "12",
        },
        {
          name:  'Мастер-класс «Как правильно дегустировать вино»',
          img: 'https://furpur.ru/upload/uf/49a/vino-_8_.jpg',
          price: 7000,
          shopid: "12",
        },
        {
          name: 'Сертификат на картинг',
          img: "https://vpechatleniya.ru/upload/iblock/abb/k6cafrunc2saqmg2fd7jg3ku3xexc4z5.jpeg",
          price: 2130,
          shopid: "12",
        },
        {
          name: 'Шефмаркет',
          img: "https://mygiftcard.ru/upload/resize_cache/iblock/388/310_195_1/q3ii4q73f0x2u2yjy3z35ykairrv12np.png.webp",
          price: 1000,
          shopid: "12",
        },
        {
          name: 'Универсальная карта "Beauty&SPA"',
          img: "https://mygiftcard.ru/upload/resize_cache/iblock/57f/310_195_1/kn957cyrqsvxyywaxfnsn264to0hl8t9.png.webp",
          price: 1000,
          shopid: "12",
        },

        {
          name: 'Cпуск над Москва-рекой',
          img: "https://furpur.ru/upload/resize_cache/uf/7cf/720_405_2/zip.jpg",
          price: 5000,
          shopid: "13",
        },
        {
          name:  'Мастер-класс «Как правильно дегустировать вино»',
          img: 'https://furpur.ru/upload/uf/49a/vino-_8_.jpg',
          price: 7000,
          shopid: "13",
        },
        {
          name: 'Сертификат на картинг',
          img: "https://vpechatleniya.ru/upload/iblock/abb/k6cafrunc2saqmg2fd7jg3ku3xexc4z5.jpeg",
          price: 2130,
          shopid: "13",
        },
        {
          name: 'Шефмаркет',
          img: "https://mygiftcard.ru/upload/resize_cache/iblock/388/310_195_1/q3ii4q73f0x2u2yjy3z35ykairrv12np.png.webp",
          price: 1000,
          shopid: "13",
        },
        {
          name: 'Универсальная карта "Beauty&SPA"',
          img: "https://mygiftcard.ru/upload/resize_cache/iblock/57f/310_195_1/kn957cyrqsvxyywaxfnsn264to0hl8t9.png.webp",
          price: 1000,
          shopid: "13",
        },

        {
          name: 'Кольцо из белого золота 585 с бриллиантами',
          img: "https://efremov.gold/upload/iblock/031/koltso_iz_belogo_zolota_585_s_brilliantami_izumrudami_2_10_03_00_00_103.jpg",
          price: 15635,
          shopid: "15",
        },
        {
          name:  'Кольцо-змейка LANCIANO с белым фианитом»',
          img: 'https://shop-cdn1.vigbo.tech/shops/121796/products/21165683/images/2-125a8d3bc3678d2ccfc5aaf38ae51c04.jpg',
          price: 7000,
          shopid: "15",
        },
        {
          name: 'Серьги из белого золота 585 пробы с бриллиантом',
          img: "https://rest.adamas.ru/img/d/1000/245/79/2457923-01-A512D-41_1.jpg",
          price: 92796,
          shopid: "15",
        },
        {
          name: 'Серебряные дутые серьги',
          img: "https://static.insales-cdn.com/images/products/1/2525/424331741/new_image.jpeg",
          price: 5490,
          shopid: "15",
        },
        {
          name: 'Серебряное колье с фианитами',
          img: "https://g2.sunlight.net/media/products/191a5de7dc555dec482a9ede6b1ebe54d7506c3b.jpg",
          price: 1690,
          shopid: "15",
        },

        {
          name: 'Кольцо из белого золота 585 с бриллиантами',
          img: "https://efremov.gold/upload/iblock/031/koltso_iz_belogo_zolota_585_s_brilliantami_izumrudami_2_10_03_00_00_103.jpg",
          price: 15635,
          shopid: "16",
        },
        {
          name:  'Кольцо-змейка LANCIANO с белым фианитом»',
          img: 'https://shop-cdn1.vigbo.tech/shops/121796/products/21165683/images/2-125a8d3bc3678d2ccfc5aaf38ae51c04.jpg',
          price: 7000,
          shopid: "16",
        },
        {
          name: 'Серьги из белого золота 585 пробы с бриллиантом',
          img: "https://rest.adamas.ru/img/d/1000/245/79/2457923-01-A512D-41_1.jpg",
          price: 92796,
          shopid: "16",
        },
        {
          name: 'Серебряные дутые серьги',
          img: "https://static.insales-cdn.com/images/products/1/2525/424331741/new_image.jpeg",
          price: 5490,
          shopid: "16",
        },
        {
          name: 'Серебряное колье с фианитами',
          img: "https://g2.sunlight.net/media/products/191a5de7dc555dec482a9ede6b1ebe54d7506c3b.jpg",
          price: 1690,
          shopid: "16",
        },

        {
          name: 'Кольцо из белого золота 585 с бриллиантами',
          img: "https://efremov.gold/upload/iblock/031/koltso_iz_belogo_zolota_585_s_brilliantami_izumrudami_2_10_03_00_00_103.jpg",
          price: 15635,
          shopid: "17",
        },
        {
          name:  'Кольцо-змейка LANCIANO с белым фианитом»',
          img: 'https://shop-cdn1.vigbo.tech/shops/121796/products/21165683/images/2-125a8d3bc3678d2ccfc5aaf38ae51c04.jpg',
          price: 7000,
          shopid: "17",
        },
        {
          name: 'Серьги из белого золота 585 пробы с бриллиантом',
          img: "https://rest.adamas.ru/img/d/1000/245/79/2457923-01-A512D-41_1.jpg",
          price: 92796,
          shopid: "17",
        },
        {
          name: 'Серебряные дутые серьги',
          img: "https://static.insales-cdn.com/images/products/1/2525/424331741/new_image.jpeg",
          price: 5490,
          shopid: "17",
        },
        {
          name: 'Серебряное колье с фианитами',
          img: "https://g2.sunlight.net/media/products/191a5de7dc555dec482a9ede6b1ebe54d7506c3b.jpg",
          price: 1690,
          shopid: "17",
        },

        {
          name: 'Кольцо из белого золота 585 с бриллиантами',
          img: "https://efremov.gold/upload/iblock/031/koltso_iz_belogo_zolota_585_s_brilliantami_izumrudami_2_10_03_00_00_103.jpg",
          price: 15635,
          shopid: "18",
        },
        {
          name:  'Кольцо-змейка LANCIANO с белым фианитом»',
          img: 'https://shop-cdn1.vigbo.tech/shops/121796/products/21165683/images/2-125a8d3bc3678d2ccfc5aaf38ae51c04.jpg',
          price: 7000,
          shopid: "18",
        },
        {
          name: 'Серьги из белого золота 585 пробы с бриллиантом',
          img: "https://rest.adamas.ru/img/d/1000/245/79/2457923-01-A512D-41_1.jpg",
          price: 92796,
          shopid: "18",
        },
        {
          name: 'Серебряные дутые серьги',
          img: "https://static.insales-cdn.com/images/products/1/2525/424331741/new_image.jpeg",
          price: 5490,
          shopid: "18",
        },
        {
          name: 'Серебряное колье с фианитами',
          img: "https://g2.sunlight.net/media/products/191a5de7dc555dec482a9ede6b1ebe54d7506c3b.jpg",
          price: 1690,
          shopid: "18",
        },

        {
          name: 'Кольцо из белого золота 585 с бриллиантами',
          img: "https://efremov.gold/upload/iblock/031/koltso_iz_belogo_zolota_585_s_brilliantami_izumrudami_2_10_03_00_00_103.jpg",
          price: 15635,
          shopid: "19",
        },
        {
          name:  'Кольцо-змейка LANCIANO с белым фианитом»',
          img: 'https://shop-cdn1.vigbo.tech/shops/121796/products/21165683/images/2-125a8d3bc3678d2ccfc5aaf38ae51c04.jpg',
          price: 7000,
          shopid: "19",
        },
        {
          name: 'Серьги из белого золота 585 пробы с бриллиантом',
          img: "https://rest.adamas.ru/img/d/1000/245/79/2457923-01-A512D-41_1.jpg",
          price: 92796,
          shopid: "19",
        },
        {
          name: 'Серебряные дутые серьги',
          img: "https://static.insales-cdn.com/images/products/1/2525/424331741/new_image.jpeg",
          price: 5490,
          shopid: "19",
        },
        {
          name: 'Серебряное колье с фианитами',
          img: "https://g2.sunlight.net/media/products/191a5de7dc555dec482a9ede6b1ebe54d7506c3b.jpg",
          price: 1690,
          shopid: "19",
        },

        {
          name: 'БАР-ОГНЕТУШИТЕЛЬ "ПОЖАРКА" 8Л',
          img: "https://static.insales-cdn.com/images/products/1/3002/555404218/large_огнетушитель_обл.png",
          price: 15635,
          shopid: "20",
        },
        {
          name:  'Органайзер-холодильник 2 в 1 "Приятной дороги"',
          img: 'https://www.ac-studio.ru/upload/iblock/626/6262b96074ec1c8817b530d50d797583.jpg',
          price: 2490,
          shopid: "20",
        },
        {
          name: 'Бар настольно-переносной "Топливный"',
          img: "https://www.ac-studio.ru/upload/iblock/644/6448758986f404e77d7e9edacf9667bc.jpg",
          price: 12900,
          shopid: "20",
        },
        {
          name: 'VIP-органайзер для авто 6 в одном "Под козырек"',
          img: "https://www.ac-studio.ru/upload/iblock/7f7/7f7ddc67172b5da34251dd71f0a1aeed.jpg",
          price: 2100,
          shopid: "20",
        },
        {
          name: 'Графин "АКВАзаправочная станция"',
          img: "https://www.ac-studio.ru/upload/iblock/6fc/6fc4ee5674a7b170b6f91bfce16b8800.jpg",
          price: 2990,
          shopid: "20",
        },

        {
          name: 'БАР-ОГНЕТУШИТЕЛЬ "ПОЖАРКА" 8Л',
          img: "https://static.insales-cdn.com/images/products/1/3002/555404218/large_огнетушитель_обл.png",
          price: 15635,
          shopid: "21",
        },
        {
          name:  'Органайзер-холодильник 2 в 1 "Приятной дороги"',
          img: 'https://www.ac-studio.ru/upload/iblock/626/6262b96074ec1c8817b530d50d797583.jpg',
          price: 2490,
          shopid: "21",
        },
        {
          name: 'Бар настольно-переносной "Топливный"',
          img: "https://www.ac-studio.ru/upload/iblock/644/6448758986f404e77d7e9edacf9667bc.jpg",
          price: 12900,
          shopid: "21",
        },
        {
          name: 'VIP-органайзер для авто 6 в одном "Под козырек"',
          img: "https://www.ac-studio.ru/upload/iblock/7f7/7f7ddc67172b5da34251dd71f0a1aeed.jpg",
          price: 2100,
          shopid: "21",
        },
        {
          name: 'Графин "АКВАзаправочная станция"',
          img: "https://www.ac-studio.ru/upload/iblock/6fc/6fc4ee5674a7b170b6f91bfce16b8800.jpg",
          price: 2990,
          shopid: "21",
        },

        {
          name: 'БАР-ОГНЕТУШИТЕЛЬ "ПОЖАРКА" 8Л',
          img: "https://static.insales-cdn.com/images/products/1/3002/555404218/large_огнетушитель_обл.png",
          price: 15635,
          shopid: "22",
        },
        {
          name:  'Органайзер-холодильник 2 в 1 "Приятной дороги"',
          img: 'https://www.ac-studio.ru/upload/iblock/626/6262b96074ec1c8817b530d50d797583.jpg',
          price: 2490,
          shopid: "22",
        },
        {
          name: 'Бар настольно-переносной "Топливный"',
          img: "https://www.ac-studio.ru/upload/iblock/644/6448758986f404e77d7e9edacf9667bc.jpg",
          price: 12900,
          shopid: "22",
        },
        {
          name: 'VIP-органайзер для авто 6 в одном "Под козырек"',
          img: "https://www.ac-studio.ru/upload/iblock/7f7/7f7ddc67172b5da34251dd71f0a1aeed.jpg",
          price: 2100,
          shopid: "22",
        },
        {
          name: 'Графин "АКВАзаправочная станция"',
          img: "https://www.ac-studio.ru/upload/iblock/6fc/6fc4ee5674a7b170b6f91bfce16b8800.jpg",
          price: 2990,
          shopid: "22",
        },

        {
          name: 'БАР-ОГНЕТУШИТЕЛЬ "ПОЖАРКА" 8Л',
          img: "https://static.insales-cdn.com/images/products/1/3002/555404218/large_огнетушитель_обл.png",
          price: 15635,
          shopid: "23",
        },
        {
          name:  'Органайзер-холодильник 2 в 1 "Приятной дороги"',
          img: 'https://www.ac-studio.ru/upload/iblock/626/6262b96074ec1c8817b530d50d797583.jpg',
          price: 2490,
          shopid: "23",
        },
        {
          name: 'Бар настольно-переносной "Топливный"',
          img: "https://www.ac-studio.ru/upload/iblock/644/6448758986f404e77d7e9edacf9667bc.jpg",
          price: 12900,
          shopid: "23",
        },
        {
          name: 'VIP-органайзер для авто 6 в одном "Под козырек"',
          img: "https://www.ac-studio.ru/upload/iblock/7f7/7f7ddc67172b5da34251dd71f0a1aeed.jpg",
          price: 2100,
          shopid: "23",
        },
        {
          name: 'Графин "АКВАзаправочная станция"',
          img: "https://www.ac-studio.ru/upload/iblock/6fc/6fc4ee5674a7b170b6f91bfce16b8800.jpg",
          price: 2990,
          shopid: "23",
        },

        {
          name: 'БАР-ОГНЕТУШИТЕЛЬ "ПОЖАРКА" 8Л',
          img: "https://static.insales-cdn.com/images/products/1/3002/555404218/large_огнетушитель_обл.png",
          price: 15635,
          shopid: "24",
        },
        {
          name:  'Органайзер-холодильник 2 в 1 "Приятной дороги"',
          img: 'https://www.ac-studio.ru/upload/iblock/626/6262b96074ec1c8817b530d50d797583.jpg',
          price: 2490,
          shopid: "24",
        },
        {
          name: 'Бар настольно-переносной "Топливный"',
          img: "https://www.ac-studio.ru/upload/iblock/644/6448758986f404e77d7e9edacf9667bc.jpg",
          price: 12900,
          shopid: "24",
        },
        {
          name: 'VIP-органайзер для авто 6 в одном "Под козырек"',
          img: "https://www.ac-studio.ru/upload/iblock/7f7/7f7ddc67172b5da34251dd71f0a1aeed.jpg",
          price: 2100,
          shopid: "24",
        },
        {
          name: 'Графин "АКВАзаправочная станция"',
          img: "https://www.ac-studio.ru/upload/iblock/6fc/6fc4ee5674a7b170b6f91bfce16b8800.jpg",
          price: 2990,
          shopid: "24",
        },

        {
          name: 'Джин Name & Nature Irish 0,7 л',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1025863-300Wx300H?context=bWFzdGVyfGltYWdlc3w2OTI4MXxpbWFnZS9wbmd8aW1hZ2VzL2gxZS9oZDEvOTg1MzExODM0OTM0Mi5wbmd8ZDlmMGM1MzUwNGI0NGJjYWNlZDUyY2ZlYmU2YjBjM2MwNjYwMzk3YmY2NGNlMGFhOGQ3NWIwZDYwYTdmNmE3MQ",
          price: 1400,
          shopid: 25,
        },
        {
          name: 'Вино игристое Tete De Cheval белое брют 0,75 л',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1021174-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTk5MXxpbWFnZS9wbmd8aW1hZ2VzL2gwNi9oNzEvOTE0ODQ0ODU3MTQyMi5wbmd8MDIxZDZmZjQwM2YxMGJhMTc0ZTYwYjU3MWUyMTcxNWY1YmNiY2UzNDkzYjllNmQ0NzI4MDFiYzE0NmY5Mzg1Yw",
          price: 899,
          shopid: 25,
        },
        {
          name: 'Виски Glenfiddich 12 лет 0,5 л в тубе',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1001140.png-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDYwNTJ8aW1hZ2UvcG5nfGltYWdlcy9oZmIvaGRiLzg4MzI1NzY5Nzg5NzQucG5nfGFhNDIzZDc4ZWJlOTE4MzdiNDZhZmU2MzgyODEyOGY5MDhiNzRjYzZmNmU5NDU5Nzc5MTUzN2Y2MjMyYmQ1OTc",
          price: 3299,
          shopid: 25,
        },
        {
          name: 'Коньяк Camus VSOP 0,7 л в подарочной упаковке',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1002594-1-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDE3Mjh8aW1hZ2UvcG5nfGltYWdlcy9oZjUvaGYzLzk0NTQ0MTE0MTU1ODIucG5nfGIyMGIwOTdmOWU4NzcwMWU0MjY1ZTM3MzVmZmZjNjZlODZlZjQwN2RmYmJkYTg0OGJkMTRiY2Q2NjQ0MzllNDA",
          price: 4499,
          shopid: 25,
        },
        {
          name: 'Вино Piccini Chianti Riserva красное сухое 0,75 л',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1017108-1-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODk2N3xpbWFnZS9wbmd8aW1hZ2VzL2hmNC9oM2EvOTM4NzM5ODA3MDMwMi5wbmd8Yjg1MjYyOGNjMzk2ODFiYzFlM2JlMGI3YjE3OWIxYWQ2YjIwMWFjN2Q0Zjg1NGI5YzAyNTM1ZGNlMzU3MWE2MA",
          price: 699,
          shopid: 25,
        },

        {
          name: 'Джин Name & Nature Irish 0,7 л',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1025863-300Wx300H?context=bWFzdGVyfGltYWdlc3w2OTI4MXxpbWFnZS9wbmd8aW1hZ2VzL2gxZS9oZDEvOTg1MzExODM0OTM0Mi5wbmd8ZDlmMGM1MzUwNGI0NGJjYWNlZDUyY2ZlYmU2YjBjM2MwNjYwMzk3YmY2NGNlMGFhOGQ3NWIwZDYwYTdmNmE3MQ",
          price: 1400,
          shopid: 26,
        },
        {
          name: 'Вино игристое Tete De Cheval белое брют 0,75 л',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1021174-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTk5MXxpbWFnZS9wbmd8aW1hZ2VzL2gwNi9oNzEvOTE0ODQ0ODU3MTQyMi5wbmd8MDIxZDZmZjQwM2YxMGJhMTc0ZTYwYjU3MWUyMTcxNWY1YmNiY2UzNDkzYjllNmQ0NzI4MDFiYzE0NmY5Mzg1Yw",
          price: 899,
          shopid: 26,
        },
        {
          name: 'Виски Glenfiddich 12 лет 0,5 л в тубе',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1001140.png-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDYwNTJ8aW1hZ2UvcG5nfGltYWdlcy9oZmIvaGRiLzg4MzI1NzY5Nzg5NzQucG5nfGFhNDIzZDc4ZWJlOTE4MzdiNDZhZmU2MzgyODEyOGY5MDhiNzRjYzZmNmU5NDU5Nzc5MTUzN2Y2MjMyYmQ1OTc",
          price: 3299,
          shopid: 26,
        },
        {
          name: 'Коньяк Camus VSOP 0,7 л в подарочной упаковке',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1002594-1-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDE3Mjh8aW1hZ2UvcG5nfGltYWdlcy9oZjUvaGYzLzk0NTQ0MTE0MTU1ODIucG5nfGIyMGIwOTdmOWU4NzcwMWU0MjY1ZTM3MzVmZmZjNjZlODZlZjQwN2RmYmJkYTg0OGJkMTRiY2Q2NjQ0MzllNDA",
          price: 4499,
          shopid: 26,
        },
        {
          name: 'Вино Piccini Chianti Riserva красное сухое 0,75 л',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1017108-1-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODk2N3xpbWFnZS9wbmd8aW1hZ2VzL2hmNC9oM2EvOTM4NzM5ODA3MDMwMi5wbmd8Yjg1MjYyOGNjMzk2ODFiYzFlM2JlMGI3YjE3OWIxYWQ2YjIwMWFjN2Q0Zjg1NGI5YzAyNTM1ZGNlMzU3MWE2MA",
          price: 699,
          shopid: 26,
        },
        
        {
          name: 'Джин Name & Nature Irish 0,7 л',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1025863-300Wx300H?context=bWFzdGVyfGltYWdlc3w2OTI4MXxpbWFnZS9wbmd8aW1hZ2VzL2gxZS9oZDEvOTg1MzExODM0OTM0Mi5wbmd8ZDlmMGM1MzUwNGI0NGJjYWNlZDUyY2ZlYmU2YjBjM2MwNjYwMzk3YmY2NGNlMGFhOGQ3NWIwZDYwYTdmNmE3MQ",
          price: 1400,
          shopid: 27,
        },
        {
          name: 'Вино игристое Tete De Cheval белое брют 0,75 л',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1021174-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTk5MXxpbWFnZS9wbmd8aW1hZ2VzL2gwNi9oNzEvOTE0ODQ0ODU3MTQyMi5wbmd8MDIxZDZmZjQwM2YxMGJhMTc0ZTYwYjU3MWUyMTcxNWY1YmNiY2UzNDkzYjllNmQ0NzI4MDFiYzE0NmY5Mzg1Yw",
          price: 899,
          shopid: 27,
        },
        {
          name: 'Виски Glenfiddich 12 лет 0,5 л в тубе',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1001140.png-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDYwNTJ8aW1hZ2UvcG5nfGltYWdlcy9oZmIvaGRiLzg4MzI1NzY5Nzg5NzQucG5nfGFhNDIzZDc4ZWJlOTE4MzdiNDZhZmU2MzgyODEyOGY5MDhiNzRjYzZmNmU5NDU5Nzc5MTUzN2Y2MjMyYmQ1OTc",
          price: 3299,
          shopid: 27,
        },
        {
          name: 'Коньяк Camus VSOP 0,7 л в подарочной упаковке',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1002594-1-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDE3Mjh8aW1hZ2UvcG5nfGltYWdlcy9oZjUvaGYzLzk0NTQ0MTE0MTU1ODIucG5nfGIyMGIwOTdmOWU4NzcwMWU0MjY1ZTM3MzVmZmZjNjZlODZlZjQwN2RmYmJkYTg0OGJkMTRiY2Q2NjQ0MzllNDA",
          price: 4499,
          shopid: 27,
        },
        {
          name: 'Вино Piccini Chianti Riserva красное сухое 0,75 л',
          img: "https://jmrkpxyvei.a.trbcdn.net/medias/1017108-1-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODk2N3xpbWFnZS9wbmd8aW1hZ2VzL2hmNC9oM2EvOTM4NzM5ODA3MDMwMi5wbmd8Yjg1MjYyOGNjMzk2ODFiYzFlM2JlMGI3YjE3OWIxYWQ2YjIwMWFjN2Q0Zjg1NGI5YzAyNTM1ZGNlMzU3MWE2MA",
          price: 699,
          shopid: 27,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          body: 'Приятный магазин. И тут всегда есть выбор до ценителей.',
          stars: 5,
          userid: 1,
          shopid: 25
        },
        {
          body: 'Угнетают продовцы! Вечно с не довольным лицом. Как будто им все все должны! Зачем устраиваться на работу, если она тебе не нрпвится',
          stars: 4,
          userid: 2,
          shopid: 25
        },
        {
          body: 'Был когда-то отличный магазин с адекватными ценами, но сейчас легче зайти в магнит или пятерку.',
          stars: 5,
          userid: 3,
          shopid: 25
        },
        {
          body: 'Выбор есть...цены чуть выше...чем везде....',
          stars: 4,
          userid: 4,
          shopid: 25
        },
        {
          body: 'К сожалению, неоднократно попадалось некачественное вино, хотя брали хорошо знакомые марки',
          stars: 2,
          userid: 5,
          shopid: 25
        },
        {
          body: 'Неплохое заведение, в общем. Однако ассортимент небольшой, а сотрудники не всегда доброжелательны',
          stars: 3,
          userid: 6,
          shopid: 25
        },
        {
          body: 'Бухал бухаю и буду бухать в этих винных закромах Шампани',
          stars: 5,
          userid: 7,
          shopid: 25
        },
        {
          body: 'Норм контора. Всё чисто, аккуратно!!!',
          stars: 5,
          userid: 8,
          shopid: 25
        },
        {
          body: 'Сетевая алкашка. Цены средние, ничего особенного',
          stars: 5,
          userid: 9,
          shopid: 25
        },
        {
          body: 'Обычно-хороший магазин нормальной сети.Единственная проблема - их Сайт. Абсолютная гадость со всех сторон - дизайн, UX/UI, скорость, наполнение информацией и функционал. Более мерзкого продукта на просторах российского Web-а еще поискать',
          stars: 4,
          userid: 10,
          shopid: 25
        },

        {
          body: 'Приятный магазин. И тут всегда есть выбор до ценителей.',
          stars: 5,
          userid: 1,
          shopid: 26
        },
        {
          body: 'Угнетают продовцы! Вечно с не довольным лицом. Как будто им все все должны! Зачем устраиваться на работу, если она тебе не нрпвится',
          stars: 5,
          userid: 2,
          shopid: 26
        },
        {
          body: 'Был когда-то отличный магазин с адекватными ценами, но сейчас легче зайти в магнит или пятерку.',
          stars: 5,
          userid: 3,
          shopid: 26
        },
        {
          body: 'Выбор есть...цены чуть выше...чем везде....',
          stars: 5,
          userid: 4,
          shopid: 26
        },
        {
          body: 'К сожалению, неоднократно попадалось некачественное вино, хотя брали хорошо знакомые марки',
          stars: 5,
          userid: 5,
          shopid: 26
        },
        {
          body: 'Неплохое заведение, в общем. Однако ассортимент небольшой, а сотрудники не всегда доброжелательны',
          stars: 5,
          userid: 6,
          shopid: 26
        },
        {
          body: 'Бухал бухаю и буду бухать в этих винных закромах Шампани',
          stars: 5,
          userid: 7,
          shopid: 26
        },
        {
          body: 'Норм контора. Всё чисто, аккуратно!!!',
          stars: 5,
          userid: 8,
          shopid: 26
        },
        {
          body: 'Сетевая алкашка. Цены средние, ничего особенного',
          stars: 3,
          userid: 9,
          shopid: 26
        },
        {
          body: 'Обычно-хороший магазин нормальной сети.Единственная проблема - их Сайт. Абсолютная гадость со всех сторон - дизайн, UX/UI, скорость, наполнение информацией и функционал. Более мерзкого продукта на просторах российского Web-а еще поискать',
          stars: 5,
          userid: 10,
          shopid: 26
        },
        

        {
          body: 'Приятный магазин. И тут всегда есть выбор до ценителей.',
          stars: 5,
          userid: 1,
          shopid: 27
        },
        {
          body: 'Угнетают продовцы! Вечно с не довольным лицом. Как будто им все все должны! Зачем устраиваться на работу, если она тебе не нрпвится',
          stars: 5,
          userid: 2,
          shopid: 27
        },
        {
          body: 'Был когда-то отличный магазин с адекватными ценами, но сейчас легче зайти в магнит или пятерку.',
          stars: 5,
          userid: 3,
          shopid: 27
        },
        {
          body: 'Выбор есть...цены чуть выше...чем везде....',
          stars: 5,
          userid: 4,
          shopid: 27
        },
        {
          body: 'К сожалению, неоднократно попадалось некачественное вино, хотя брали хорошо знакомые марки',
          stars: 5,
          userid: 5,
          shopid: 27
        },
        {
          body: 'Неплохое заведение, в общем. Однако ассортимент небольшой, а сотрудники не всегда доброжелательны',
          stars: 5,
          userid: 6,
          shopid: 27
        },
        {
          body: 'Бухал бухаю и буду бухать в этих винных закромах Шампани',
          stars: 5,
          userid: 7,
          shopid: 27
        },
        {
          body: 'Норм контора. Всё чисто, аккуратно!!!',
          stars: 5,
          userid: 8,
          shopid: 27
        },
        {
          body: 'Сетевая алкашка. Цены средние, ничего особенного',
          stars: 4,
          userid: 9,
          shopid: 27
        },
        {
          body: 'Обычно-хороший магазин нормальной сети.Единственная проблема - их Сайт. Абсолютная гадость со всех сторон - дизайн, UX/UI, скорость, наполнение информацией и функционал. Более мерзкого продукта на просторах российского Web-а еще поискать',
          stars: 5,
          userid: 10,
          shopid: 27
        },

        {
          body: 'Приятный магазин. И тут всегда есть выбор до ценителей.',
          stars: 5,
          userid: 1,
          shopid: 28
        },
        {
          body: 'Угнетают продовцы! Вечно с не довольным лицом. Как будто им все все должны! Зачем устраиваться на работу, если она тебе не нрпвится',
          stars: 3,
          userid: 2,
          shopid: 28
        },
        {
          body: 'Был когда-то отличный магазин с адекватными ценами, но сейчас легче зайти в магнит или пятерку.',
          stars: 4,
          userid: 3,
          shopid: 28
        },
        {
          body: 'Выбор есть...цены чуть выше...чем везде....',
          stars: 5,
          userid: 4,
          shopid: 28
        },
        {
          body: 'К сожалению, неоднократно попадалось некачественное вино, хотя брали хорошо знакомые марки',
          stars: 2,
          userid: 5,
          shopid: 28
        },
        {
          body: 'Неплохое заведение, в общем. Однако ассортимент небольшой, а сотрудники не всегда доброжелательны',
          stars: 4,
          userid: 6,
          shopid: 28
        },
        {
          body: 'Бухал бухаю и буду бухать в этих винных закромах Шампани',
          stars: 5,
          userid: 7,
          shopid: 28
        },
        {
          body: 'Норм контора. Всё чисто, аккуратно!!!',
          stars: 5,
          userid: 8,
          shopid: 28
        },
        {
          body: 'Сетевая алкашка. Цены средние, ничего особенного',
          stars: 3,
          userid: 9,
          shopid: 28
        },
        {
          body: 'Обычно-хороший магазин нормальной сети.Единственная проблема - их Сайт. Абсолютная гадость со всех сторон - дизайн, UX/UI, скорость, наполнение информацией и функционал. Более мерзкого продукта на просторах российского Web-а еще поискать',
          stars: 1,
          userid: 10,
          shopid: 28
        },


        {
          body: 'Приятный магазин. И тут всегда есть выбор до ценителей.',
          stars: 5,
          userid: 1,
          shopid: 29
        },
        {
          body: 'Угнетают продовцы! Вечно с не довольным лицом. Как будто им все все должны! Зачем устраиваться на работу, если она тебе не нрпвится',
          stars: 5,
          userid: 2,
          shopid: 29
        },
        {
          body: 'Был когда-то отличный магазин с адекватными ценами, но сейчас легче зайти в магнит или пятерку.',
          stars: 5,
          userid: 3,
          shopid: 29
        },
        {
          body: 'Выбор есть...цены чуть выше...чем везде....',
          stars: 3,
          userid: 4,
          shopid: 29
        },
        {
          body: 'К сожалению, неоднократно попадалось некачественное вино, хотя брали хорошо знакомые марки',
          stars: 3,
          userid: 5,
          shopid: 29
        },
        {
          body: 'Неплохое заведение, в общем. Однако ассортимент небольшой, а сотрудники не всегда доброжелательны',
          stars: 3,
          userid: 6,
          shopid: 29
        },
        {
          body: 'Бухал бухаю и буду бухать в этих винных закромах Шампани',
          stars: 3,
          userid: 7,
          shopid: 29
        },
        {
          body: 'Норм контора. Всё чисто, аккуратно!!!',
          stars: 3,
          userid: 8,
          shopid: 29
        },
        {
          body: 'Сетевая алкашка. Цены средние, ничего особенного',
          stars: 3,
          userid: 9,
          shopid: 29
        },
        {
          body: 'Обычно-хороший магазин нормальной сети.Единственная проблема - их Сайт. Абсолютная гадость со всех сторон - дизайн, UX/UI, скорость, наполнение информацией и функционал. Более мерзкого продукта на просторах российского Web-а еще поискать',
          stars: 3,
          userid: 10,
          shopid: 29
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
    await queryInterface.bulkDelete("Products", null, {});
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
