"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const products_module_1 = require("./products/products.module");
const pages_module_1 = require("./pages/pages.module");
const categories_module_1 = require("./categories/categories.module");
const siteconfigs_module_1 = require("./siteconfigs/siteconfigs.module");
const images_module_1 = require("./images/images.module");
const carts_module_1 = require("./carts/carts.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_DB, {
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            pages_module_1.PagesModule,
            categories_module_1.CategoriesModule,
            products_module_1.ProductsModule,
            siteconfigs_module_1.SiteConfigsModule,
            images_module_1.ImagesModule,
            carts_module_1.CartsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map