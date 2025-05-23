export interface Iproduct {
    id: string;
    name: string;
    price: number;
    quantity: number;
    img: string;
    category?: string;
    description?: string;
    features?: string[];
}
