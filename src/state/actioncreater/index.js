// import {createAsyncTunk } from '@reduxjs/toolkit';
// import { type } from '@testing-library/user-event/dist/type';

export const depositMoney = (amount) => {
    return(dispatch) => {
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}

export const withdrawMone = (amount) => {
    return(dispatch) => {
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}

export const ChangeTheme = (theme) => {
    return(dispatch) => {
        dispatch({
            type:'light',
            payload:theme
        })
    }
}