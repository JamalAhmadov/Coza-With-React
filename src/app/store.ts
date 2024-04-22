import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch