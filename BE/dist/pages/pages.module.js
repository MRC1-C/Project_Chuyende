"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesModule = void 0;
const common_1 = require("@nestjs/common");
const pages_service_1 = require("./services/pages.service");
const pages_controller_1 = require("./controllers/pages.controller");
const pages_repository_1 = require("./repository/pages.repository");
const mongoose_1 = require("@nestjs/mongoose");
const page_schema_1 = require("./schema/page.schema");
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: page_schema_1.Page.name, schema: page_schema_1.PageSchema }]),
        ],
        controllers: [pages_controller_1.PagesController],
        providers: [pages_service_1.PagesService, pages_repository_1.PagesRepository],
        exports: [pages_service_1.PagesService],
    })
], PagesModule);
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map