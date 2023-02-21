export type ShopSliceState = {
  shops: Shop[];
  oneShop: Shop;
  products: Product[];
  categories: Category[];
  categoryid: number;
};

export type Shop = {
  id: number;
  name: string;
  http: string;
  geoteg: string;
  categoryid: number;
  userid: number;
  img: string;
  Comments: Comment[];
};

export type Comment = {
  id?: number;
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

export type Category = {
  id: number;
  sex: string;
  name: string;
};

export type ShopFormInput = {
  name: string;
  http: string;
  geoteg: string;
  categoryid: number;
  img: string;
};

export type ProductFormInput = {
  name: string;
  img: string;
  price: string;
  shopid: number;
};
