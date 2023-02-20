import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { ShopSliceState, Shop, Product, Category } from './ShopTypes';

const initialState: ShopSliceState = {
  shops: [],
  oneShop: {
    id: 0,
    name: '',
    http: '',
    geoteg: '',
    categoryid: 0,
    userid: 0,
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

export const { getShops, getProducts, getCategories, setCategory} = shopsSlice.actions;

export const loadShops = (): AppThunk => (dispatch) => {
  try {
    axios<Shop[]>('/shops').then((response) =>
      dispatch(getShops(response.data))
    );
  } catch (error) {
    console.log(error);
  }
};

export const loadProducts =
  (id): AppThunk =>
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
