import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import swal from 'sweetalert2'
export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    const Toast = swal.mixin({ toast: true, position: 'top-end',
    showConfirmButton: false, timer: 3000, timerProgressBar: true,
     didOpen: (toast) => { toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer) } }) 
   Toast.fire({ icon: 'success', title: 'Sigin successfully' })
    router.push('/');
  }catch (error) {
    console.log(error,"hello");
  

      swal.fire({ icon: 'error', 
      title: 'Oops...', text: 'Something went wrong .',
     })
    

  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};