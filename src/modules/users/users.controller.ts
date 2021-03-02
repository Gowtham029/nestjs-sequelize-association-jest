import { Body, Controller, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UsersRequestDto } from "../../dtos/users-request.dto";
import { UsersResponseDto } from "../../dtos/users-response.dto";
import { UsersService } from "./user.service";

@ApiTags("users")
@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Users list",
        type: UsersResponseDto,
    })
    async getUsers(): Promise<any[]> {
        return this.usersService.findAll();
    }

    @Get("/:userid/organizations")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Get User",
        type: UsersResponseDto,
    })
    @ApiParam({ name: "userid", description: "userid", example: 1 })
    async getUser(@Param("userid") id: string): Promise<any> {
        const result = await this.usersService.findOne(Number(id));
        return result;
    }

    @Post()
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Create User",
        type: UsersRequestDto,
    })
    @ApiBody({ description: "request body", type: UsersRequestDto })
    async createUser(@Body() data: UsersRequestDto): Promise<void> {
        return this.usersService.create(data);
    }

}
