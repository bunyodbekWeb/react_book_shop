import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import reduxBooks from './redux/reduxBooks'

const store = configureStore({
    reducer:{
        avtorBook: reduxBooks
    }
})

export default store