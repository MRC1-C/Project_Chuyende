import { Document } from 'mongoose';
export declare type ProductDocument = Product & Document;
declare type typeName = {
    name: string;
    language: string;
};
declare type typeDes = {
    des: string;
    language: string;
};
declare type typeImage = {
    name: typeName[];
    url: string;
    description: typeDes[];
};
export declare class Product {
    name: typeName[];
    description?: typeDes[];
    condition: string;
    size: string;
    weight: string;
    url: string;
    images: typeImage[];
    category_id: string;
    price: number;
    discounts?: number;
}
export declare const ProductSchema: import("mongoose").Schema<Document<Product, any>, import("mongoose").Model<any, any, any>, undefined, any>;
export {};
