export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  hoverImageUrl: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}
