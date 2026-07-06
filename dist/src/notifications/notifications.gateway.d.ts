import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class NotificationGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private clientMap;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleRegister(client: Socket, data: {
        driverId: string;
    }): void;
    notifyDrivers(driverIds: string[], event: string, data: any): void;
    notifyRideOffer(rideId: string, driverIds: string[], rideData: any): void;
    notifyRideAssigned(driverId: string, rideId: string): void;
    notifyRideClosed(driverId: string, rideId: string): void;
}
