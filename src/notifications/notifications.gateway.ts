import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';

@WebSocketGateway({
  cors: { origin: '*' },
})
@Injectable()
export class NotificationGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private clientMap = new Map<string, Socket>(); // driverId -> socket

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    // Remove from map
    for (const [driverId, socket] of this.clientMap.entries()) {
      if (socket.id === client.id) {
        this.clientMap.delete(driverId);
        break;
      }
    }
  }

  @SubscribeMessage('register')
  handleRegister(client: Socket, data: { driverId: string }) {
    this.clientMap.set(data.driverId, client);
    client.emit('registered', { driverId: data.driverId });
  }

  notifyDrivers(driverIds: string[], event: string, data: any) {
    for (const driverId of driverIds) {
      const socket = this.clientMap.get(driverId);
      if (socket) {
        socket.emit(event, data);
      }
    }
  }

  notifyRideOffer(rideId: string, driverIds: string[], rideData: any) {
    this.notifyDrivers(driverIds, 'ride:offer', {
      rideId,
      ride: rideData,
    });
  }

  notifyRideAssigned(driverId: string, rideId: string) {
    const socket = this.clientMap.get(driverId);
    if (socket) {
      socket.emit('ride:assigned', { rideId });
    }
  }

  notifyRideClosed(driverId: string, rideId: string) {
    const socket = this.clientMap.get(driverId);
    if (socket) {
      socket.emit('ride:closed', { rideId });
    }
  }
}
