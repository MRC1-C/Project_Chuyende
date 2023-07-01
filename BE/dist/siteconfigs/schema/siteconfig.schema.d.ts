import { Document } from 'mongoose';
export declare type SiteConfigDocument = SiteConfig & Document;
export declare class SiteConfig {
    name: string;
    value: string;
}
export declare const SiteConfigSchema: import("mongoose").Schema<Document<SiteConfig, any>, import("mongoose").Model<any, any, any>, undefined, any>;
