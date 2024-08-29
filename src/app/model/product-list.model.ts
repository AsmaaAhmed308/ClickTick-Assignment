export interface Review {  
  rating: number;  
  comment: string;  
  date: string; // ISO date format  
  reviewerName: string;  
  reviewerEmail: string;  
}  

export interface Dimensions {  
  width: number;  
  height: number;  
  depth: number;  
}  

export interface Meta {  
  createdAt: string; // ISO date format  
  updatedAt: string; // ISO date format  
  barcode: string;  
  qrCode: string;  
}  

export interface Product {  
  id: number;  
  title: string;  
  description: string;  
  category: string;  
  price: number;  
  discountPercentage: number;  
  rating: number;  
  stock: number;  
  tags: string[];  
  brand: string;  
  sku: string;  
  weight: number;  
  dimensions: Dimensions; // Use the Dimensions interface  
  warrantyInformation: string;  
  shippingInformation: string;  
  availabilityStatus: string;  
  reviews: Review[]; // Array of Review objects  
  returnPolicy: string;  
  minimumOrderQuantity: number;  
  meta: Meta; // Use the Meta interface  
  images: string[]; // Array of image URLs  
  thumbnail: string;  
}

export interface CartProducts {
  id: number;  
  title: string;  
  price: number;  
  quantity: number;  
  total: number;  
  discountPercentage: number;  
  discountedTotal: number;  
  thumbnail: string;  
}

export interface CartItems {
  id: number;  
  products : CartProducts[]
  total: number;  
  discountedTotal: number;  
  userId: number;  
  totalProducts: number;  
  totalQuantity: number;  
}

export interface Cart {
  carts  : CartItems[]
  total  : number;
  skip   : number;
  limit  : number;
}