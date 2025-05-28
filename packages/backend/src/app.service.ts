import {Injectable} from '@nestjs/common';
import {User} from "@game-tracker/shared";

@Injectable()
export class AppService {
    private mockUser: User = {
        id: 1,
        username: 'tester',
        email: 'testuser@example.com',
        createdAt: new Date(),
        password: "password",
        updatedAt: new Date(),
        profilePictureUrl: 'https://example.com/profile.jpg'
    }

    getHello(): string {
        return `Hello ${this.mockUser.username}!`;
    }
}
