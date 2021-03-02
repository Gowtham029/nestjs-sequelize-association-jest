import { Module } from "@nestjs/common";
import { LoginService } from "./login.service";
import { LoginController } from "./login.controller";
import { AuthModule } from "../../common/middlewares/auth/auth.module";

@Module({
    imports: [AuthModule],
    providers: [LoginService],
    controllers: [LoginController],
})
export class LoginModule {}
