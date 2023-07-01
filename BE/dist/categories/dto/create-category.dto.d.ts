declare type typeName = {
    name: string;
    language: string;
};
declare type typeDes = {
    des: string;
    language: string;
};
export declare class CreateCategoryDto {
    name: typeName[];
    description: typeDes[];
    url: string;
    parent_id?: string;
    page: string;
}
export {};
