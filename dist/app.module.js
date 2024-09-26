"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const firebase_services_1 = require("./firebase/firebase.services");
const firebase_controller_1 = require("./firebase/firebase.controller");
const admin = __importStar(require("firebase-admin"));
let AppModule = class AppModule {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert({
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3NhCtGP2KgQ5w\nQeiTQBgwPyuh1SxnbpMFq1KihmfDjNvrsIGjoif+bn1HJXljcgOXfEgWuzt8/rrU\nxJt4TiqDiaFd/i6Pq9jF7P/hP+q1NFZaPbTETmRXnAkwWSGG3yazkACbEZ8i+RM/\nt3aeFhoeMnZzTvnouDBPYuvalKvuanOpV6cvXhBZr6CQzO0YwbfT4UoaTE+k0rEg\nN9rSV7guKFdw+EYiogt0oX4yzS0Nu72BSigKOjyisy6FQMB5+QKx5DNfCU3TzMQV\nLNpThxLxGvgalo3qTIts2ndh32XzfFAaVlOJ9K+qLPYjeAB9Oo/3Haj14pl1u6Gc\nrKhsoIUFAgMBAAECggEAGW37LZOI6ZcVMnarefjNArFZ9In6slaSOJi5jQ57y5Q7\nGEE1FUnWJEYgxGXKrgduwTGCbglJ7gULWKn7bFzpIL3TNJEp1E5Fdd95+sFc6g7c\nJ4VmGFNLMS/axKeydB54KDdGJj/xZzDMP61O3Q1zTZqyfznIjUk3h2VTGFFHdf17\nWjiQZ9bXRwUgVlVRlPLMO34OO+OjsHIJpK7NZ5uT/NvjKcP7i5A8HplgYMiNJCjP\nsKd8g6hdPhtxlamPIYPu1gYm0bZfpJajOukT38dKlhShmkpIAxlyog1yn/Mc9PH2\nYfzyTi+sQLA3TCzFSEb5dYx6ucGn5T+mMbVgzRHfhwKBgQDmHnPgJXgldkPoUsUA\nHyXTEjXc7y/Je8clhAumXyAWQ8z+jSa1ijGMyikP0Cd7Bxgwtb42Kh9butOzCwBI\nhMHn1e06whYqA9Ex+0ZQX9Tna62EKHYTx5rqb+76eS4aNmyKeZLOUv0wFm1o2Lub\n7dRtDVl/PGNjlUMO4fgRuGMC6wKBgQDL0Q1FNH/MaerbuzvAuiomWVYpapraugs/\nUrUsQ1jaLKoeNUYGTQ0lXBfYmv2r7VcFKZEBefqEamS/JMdHJGw+FL4ymtydoQ+Z\nblWC9mg2/jIfekxtbrVZ6eEKwEJGi2f2Qov8kGtAPvSH63T3xfJEKcAaS7cyMV2r\nnIjP/W87zwKBgQDPN+byleseGORHpZj+Zg4Chqh4Pe7TSaHoF4MCGzDiu8UyB9su\nqLW76SOWuMOElrviyRXy4nWAfbk6xhJIOzv9T3ejbLjWtr8/ed00bUdj6WPD2UeS\nwjCvIYKajFrGgfG1tIpNPw/9qIR3YIt4e27JkLbhy3hYaUWMdlGTa23FZwKBgHGN\nskgJXN5lcH0ljr/suIkPIusGQupz1spb6SaVCw7a7ZjQ84eVLCrRaVO73nMIU4BD\nzU82R3W41RKNih0/1LKt2d3V2+5Sip9gEnJZmGxzKTfSanxZvt4uaLwVq5ckGjLg\nlp+LUsXDjXegnlVhSn3hiO7dml5zlI2FM9A1keCPAoGAVN858xB1NsKrnT7ILrR2\nMnLDWT35BgBfVU8QmQlVopGt4ATJFvu2S9z5iY2u3boLatuXaGiF45NzFqNwMX7n\njXKs4BWmB8OkIvo1wgqzuT9iqudvtKZLqL2Lxnp58GPgwTxjdeqZe3M8/msAfVFF\nOlEC5EJlgMHAhJHMQx6tF9o=\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
                client_email: "firebase-adminsdk-i50le@crudapi-6b383.iam.gserviceaccount.com",
                project_id: "crudapi-6b383",
            }),
            databaseURL: "https://crudapi-6b383-default-rtdb.firebaseio.com"
        });
        common_1.Logger.log('Firebase initialized successfully');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot()],
        controllers: [app_controller_1.AppController, firebase_controller_1.FirebaseController],
        providers: [app_service_1.AppService, firebase_services_1.FirebaseService],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
//# sourceMappingURL=app.module.js.map