import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type {
  ShopSliceState,
  Shop,
  Product,
  Category,
  ShopFormInput,
  ProductFormInput,
} from './ShopTypes';

const initialState: ShopSliceState = {
  shops: [],
  oneShop: {
    id: 0,
    name: '',
    http: '',
    geoteg: '',
    categoryid: 0,
    userid: 0,
    img: '',
    Comments: [],
  },
  products: [],
  categories: [],
  categoryid: 0,
};

export const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    addShop: (state, action: PayloadAction<Shop>) => ({
      ...state,
      shops: [action.payload, ...state.shops],
    }),
    addProduct: (state, action: PayloadAction<Product>) => ({
      ...state,
      products: [action.payload, ...state.products],
    }),
    // addComment: (state, action: PayloadAction<Comment>) => ({
    //   ...state,
    //   oneShop: state.oneShop.Comments.push(action.payload),
    // }),

    setCategory: (state, action: PayloadAction<number>) => ({
      ...state,
      categoryid: action.payload,
    }),

    getShops: (state, action: PayloadAction<Shop[]>) => ({
      ...state,
      shops: action.payload,
    }),

    getProducts: (state, action: PayloadAction<Product[]>) => ({
      ...state,
      products: action.payload,
    }),
    getCategories: (state, action: PayloadAction<Category[]>) => ({
      ...state,
      categories: action.payload,
    }),
  },
});

export const {
  getShops,
  getProducts,
  getCategories,
  setCategory,
  addShop,
  addProduct,
} = shopsSlice.actions;

export const loadShops = (): AppThunk => (dispatch) => {
  try {
    axios<Shop[]>('/shops').then((response) =>
      dispatch(getShops(response.data))
    );
  } catch (error) {
    console.log(error);
  }
};

export const addNewShop =
  (formInput: ShopFormInput): AppThunk =>
  (dispatch) => {
    try {
      axios
        .post('/products', formInput)
        .then((response) => dispatch(addProduct(response.data)));
    } catch (error) {
      console.log(error);
    }
  };


  export const addNewProduct =
  (formInput: ProductFormInput): AppThunk =>
  (dispatch) => {
    try {
      axios
        .post('/shops', formInput)
        .then((response) => dispatch(addShop(response.data)));
    } catch (error) {
      console.log(error);
    }
  };

export const loadProducts =
  (id: number): AppThunk =>
  (dispatch) => {
    try {
      axios<Product[]>(`/products/${id}`).then((response) =>
        dispatch(getProducts(response.data))
      );
    } catch (error) {
      console.log(error);
    }
  };

export const loadCategories = (): AppThunk => (dispatch) => {
  try {
    axios<Category[]>(`/categories`).then((response) =>
      dispatch(getCategories(response.data))
    );
  } catch (error) {
    console.log(error);
  }
};
export default shopsSlice.reducer;
