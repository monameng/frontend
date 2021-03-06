import request from '@/utils/request';
import Router from 'next/router';
import { setStorage, getStorage, removeStorage } from '@/utils/store';
import { STORE_USER_KEY, PATH_BEFORLOGIN } from '@/constants/base';

export default {
  test: () => {
    console.log('test effects');
  },
  'user/loginByOauth': async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const { token } = payload;
      if (token) {
        const path = getStorage(PATH_BEFORLOGIN);

        console.log(path);
        console.log(path);
        console.log(path);
        console.log(path);
        console.log(path);
        console.log(path);
        await removeStorage(PATH_BEFORLOGIN);
        await setStorage(STORE_USER_KEY, { token });
        await dispatch({ type: 'user/save', payload: { token } });
        await Router.push(path || '/');
      }
    } catch (error) {
      console.log(error);
    }
  },
  'user/login': async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const { status, token, userInfo } = await request('user/login', payload);
      if (status === 200) {
        await setStorage(STORE_USER_KEY, { token });
        await dispatch({ type: 'user/save', payload: { userInfo } });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
