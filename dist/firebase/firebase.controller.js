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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseController = void 0;
const common_1 = require("@nestjs/common");
const firebase_services_1 = require("./firebase.services");
let FirebaseController = class FirebaseController {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    createName(name) {
        return this.firebaseService.createUser(name);
    }
    getName(name) {
        return this.firebaseService.getUserByName(name);
    }
    updateName(id, name) {
        return this.firebaseService.updateUser(id, name);
    }
    deleteName(id) {
        return this.firebaseService.deleteUser(id);
    }
    getAllNames() {
        return this.firebaseService.getUsers();
    }
};
exports.FirebaseController = FirebaseController;
__decorate([
    (0, common_1.Post)('createUser'),
    __param(0, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FirebaseController.prototype, "createName", null);
__decorate([
    (0, common_1.Get)('getUserByName'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FirebaseController.prototype, "getName", null);
__decorate([
    (0, common_1.Put)('updateUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FirebaseController.prototype, "updateName", null);
__decorate([
    (0, common_1.Delete)('deleteUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FirebaseController.prototype, "deleteName", null);
__decorate([
    (0, common_1.Get)('getAllUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FirebaseController.prototype, "getAllNames", null);
exports.FirebaseController = FirebaseController = __decorate([
    (0, common_1.Controller)('User'),
    __metadata("design:paramtypes", [firebase_services_1.FirebaseService])
], FirebaseController);
//# sourceMappingURL=firebase.controller.js.map