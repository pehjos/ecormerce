import {DELETEORDER, ORDER, START_LOADING, END_LOADING, FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, CREATE, UPDATE, LIKE, COMMENT, FETCH_BY_CREATOR, CREATEORDER } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchOrder();
  
      dispatch({ type: ORDER, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const getPostsByCreator = (name) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchPostsByCreator(name);

    dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = (post) => async (dispatch) => {
    try {
      const { data } = await api.createOrder(post);
  
      dispatch({ type: CREATEORDER, payload: data });
    } catch (error) {
      console.log(error.message ,"error");
    }
  };

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    await await api.deleteOrder(id);

    dispatch({ type: DELETEORDER, payload: id });
  } catch (error) {
    console.log(error);
  }
};