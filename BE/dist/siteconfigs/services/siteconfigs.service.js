"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteConfigsService = void 0;
const common_1 = require("@nestjs/common");
const siteconfigs_repository_1 = require("../repository/siteconfigs.repository");
let SiteConfigsService = class SiteConfigsService {
    constructor(siteconfigsRepository) {
        this.siteconfigsRepository = siteconfigsRepository;
    }
    async create(createUserDto) {
        return await this.siteconfigsRepository.create(createUserDto);
    }
    async findAll() {
        return await this.siteconfigsRepository.findAll();
    }
    async findOne(filter) {
        return await this.siteconfigsRepository.findOne(filter);
    }
    async update(id, updateUserDto) {
        return await this.siteconfigsRepository.update(id, updateUserDto);
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
SiteConfigsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [siteconfigs_repository_1.SiteConfigsRepository])
], SiteConfigsService);
exports.SiteConfigsService = SiteConfigsService;
//# sourceMappingURL=siteconfigs.service.js.map