import UserActionTypes from './user.types';

export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

/* GOOGLE SIGN IN START ACTION */
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

/* EMAIL SIGN IN START ACTION */
export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

/* SIGN IN SUCCESS ACTION */
export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

/* SIGN IN FAILURE ACTION */
export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

/* CHECK USER SESSION ACTION */
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

/* SIGN OUT START ACTION*/
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

/* SIGN OUT SUCCESS ACTION*/
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

/* SIGN OUT FAILURE ACTION*/
export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

/* SIGN UP START ACTION*/
export const signUpStart = (userDetail) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userDetail,
});

/* SIGN UP SUCCESS ACTION*/
export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

/* SIGN UP FAILURE ACTION*/
export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
