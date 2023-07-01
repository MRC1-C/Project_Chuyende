import { Document } from 'mongoose';
import { LANGUAGE } from 'src/config/enum';
export declare type PageDocument = Page & Document;
declare type namePage = {
    name: string;
    language: LANGUAGE;
};
export declare class Page {
    name: namePage[];
    paths: string;
}
export declare const PageSchema: import("mongoose").Schema<Document<Page, any>, import("mongoose").Model<any, any, any>, undefined, any>;
export {};
