export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

// export interface IProps {
//   category?: string;
//   sort?: string;
// }

export interface ProductDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity?: number | undefined; 
  rating: {
    rate: number;
    count: number;
  };
}


export interface Item {
  id: string;
  quantity: number;
  price: number;
  totalPrice: number;
  // Diğer özellikler...
}

