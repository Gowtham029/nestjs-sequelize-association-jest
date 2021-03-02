import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AuthService } from "../../common/middlewares/auth/auth.service";
import { LoginRequestDto } from "../../dtos/login-request.dto";

@Injectable()
export class LoginService {
    constructor(private readonly authService: AuthService) {}

    public async login(loginRquestBody: LoginRequestDto): Promise<any> {
        const userName = "admin";
        const password = "123456";

        if (loginRquestBody.userName === userName && loginRquestBody.password === password) {
            return this.authService.createAuthToken(loginRquestBody);
        }
        throw new HttpException("Invalid Username or password", HttpStatus.UNAUTHORIZED);
    }
}
