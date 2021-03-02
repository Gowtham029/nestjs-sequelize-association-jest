import { ApiProperty } from "@nestjs/swagger";

export class LoginRequestDto {
    @ApiProperty({ example: "Mani", description: "Last Name of the User" })
    userName: string;

    @ApiProperty({ example: "Chennai", description: "address of the User" })
    password: string;
}
