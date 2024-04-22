import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productStatus: "idle",
  productDetail: null, 
  productDetailStatus: "idle",
};

export const getProducts = createAsyncThunk("products", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch products" );
  }
});

export const getDetailProduct = createAsyncThunk("product", async (id: number) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch product details" )
  }
});

export const getCategoryProduct = createAsyncThunk("productcategory", async (category: string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch product details")
  }
});

const productSlice = createSlice({
  name: "productState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.productStatus = "loading";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productStatus = "success";
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.productStatus = "fail";
    });

    builder.addCase(getDetailProduct.pending, (state) => {
      state.productDetailStatus = "loading";
    });
    builder.addCase(getDetailProduct.fulfilled, (state, action) => {
      state.productDetailStatus = "success";
      state.productDetail = action.payload;
    });
    builder.addCase(getDetailProduct.rejected, (state) => {
      state.productDetailStatus = "fail";
    });

    builder.addCase(getCategoryProduct.pending, (state) => {
      state.productStatus = "loading";
    });
    builder.addCase(getCategoryProduct.fulfilled, (state, action) => {
      state.productStatus = "success"; 
      state.products = action.payload;
    });
    builder.addCase(getCategoryProduct.rejected, (state) => {
      state.productStatus = "fail"; 
    });
  },
});

export default productSlice.reducer;
