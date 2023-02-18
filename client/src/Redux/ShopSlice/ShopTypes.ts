export type ShopSliceState = {
  shops: Shop[];
  oneShop: Shop;
};

export type Shop = {
  id: number;
  name: string;
  http: string;
  geoteg: string;
  categoryid: number;
  userid: number;
  Comments: Comment[];
  Products: Product[];
};

export type Comment = {
  id: number;
  body: string;
  stars: number;
  userid: number;
  shopid: number;
};

export type Product = {
  name: string;
  img: string;
  price: number;
  shopid: number;
};
