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
exports.NotificationGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
let NotificationGateway = class NotificationGateway {
    server;
    clientMap = new Map();
    handleConnection(client) {
        console.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
        for (const [driverId, socket] of this.clientMap.entries()) {
            if (socket.id === client.id) {
                this.clientMap.delete(driverId);
                break;
            }
        }
    }
    handleRegister(client, data) {
        this.clientMap.set(data.driverId, client);
        client.emit('registered', { driverId: data.driverId });
    }
    notifyDrivers(driverIds, event, data) {
        for (const driverId of driverIds) {
            const socket = this.clientMap.get(driverId);
            if (socket) {
                socket.emit(event, data);
            }
        }
    }
    notifyRideOffer(rideId, driverIds, rideData) {
        this.notifyDrivers(driverIds, 'ride:offer', {
            rideId,
            ride: rideData,
        });
    }
    notifyRideAssigned(driverId, rideId) {
        const socket = this.clientMap.get(driverId);
        if (socket) {
            socket.emit('ride:assigned', { rideId });
        }
    }
    notifyRideClosed(driverId, rideId) {
        const socket = this.clientMap.get(driverId);
        if (socket) {
            socket.emit('ride:closed', { rideId });
        }
    }
};
exports.NotificationGateway = NotificationGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], NotificationGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('register'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], NotificationGateway.prototype, "handleRegister", null);
exports.NotificationGateway = NotificationGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: { origin: '*' },
    }),
    (0, common_1.Injectable)()
], NotificationGateway);
//# sourceMappingURL=notifications.gateway.js.map