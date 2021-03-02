import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UsersRequestDto {
    @ApiProperty({ example: "Karthick", description: "First Name of the User" })
    name: string;

    @ApiProperty({ example: "Mani", description: "Last Name of the User" })
    email: string;

    @ApiProperty({ example: "Chennai", description: "address of the User" })
    address: string;

    @ApiProperty({ example: 1, description: "organization of the User" })
    orgId: number;

    @ApiProperty({ example: "1Fe1as4", description: "Password" })
    password: string;
}
