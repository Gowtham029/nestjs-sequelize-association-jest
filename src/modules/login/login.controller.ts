import { Body, Controller, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LoginResponseDto } from "../../dtos/login-response.dto";
import { LoginRequestDto } from "../../dtos/login-request.dto";
import { LoginService } from "./login.service";

@ApiTags("login")
@Controller("login")
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Post()
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Login",
        type: LoginResponseDto,
    })
    @ApiBody({ description: "request body", type: LoginRequestDto })
    async doLogin(@Body() data: LoginRequestDto): Promise<any> {
        const result = await this.loginService.login(data);
        return result;
    }
}
