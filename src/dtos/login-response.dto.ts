import { ApiProperty } from "@nestjs/swagger";

export class LoginResponseDto {
    @ApiProperty({ example: "a jawt token", description: "Auth token to access the api's" })
    token: string;
}
