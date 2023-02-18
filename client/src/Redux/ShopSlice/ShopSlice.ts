import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type  { ShopSliceState, Shop } from './ShopTypes';

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
        Products: [],
    },
}

export const shopsSlice =createSlice({
    name: 'shops', 
    initialState,
    reducers: {
        getAllShops: (state, action: PayloadAction<Shop[]>) => ({
            ...state,
            shops: action.payload
        })
    }
})

export const { getAllShops } = shopsSlice.actions;




export default shopsSlice.reducer;