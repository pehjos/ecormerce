import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import cart from './cart';
import order from './order';
export const reducers = combineReducers({ posts,order, auth ,cart});