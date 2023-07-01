declare type typeName = {
    name: string;
    language: string;
};
declare type typeDes = {
    des: string;
    language: string;
};
export declare type typeImage = {
    name: typeName[];
    url: string;
    description: typeDes[];
};
export declare class CreateProductDto {
    name: typeName[];
    description?: typeDes[];
    condition: string;
    size: string;
    weight: string;
    url: string;
    price: number;
    images: typeImage[];
    category_id: string;
    discounts?: number;
}
export {};
