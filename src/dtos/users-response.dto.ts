import { ApiProperty } from "@nestjs/swagger";

export class UsersResponseDto {
    @ApiProperty({ example: "1", description: "ID of the User" })
    userId: number;

    @ApiProperty({ example: "Karthick", description: "First Name of the User" })
    name: string;

    @ApiProperty({ example: "Mani", description: "Last Name of the User" })
    email: string;

    @ApiProperty({ example: true, description: "Active state of the User" })
    address: string;
}
