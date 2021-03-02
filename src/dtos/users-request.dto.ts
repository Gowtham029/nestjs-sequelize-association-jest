import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UsersRequestDto {
    @ApiProperty({ example: "Karthick", description: "First Name of the User" })
    name: string;

    @ApiProperty({ example: "Mani", description: "Last Name of the User" })
    email: string;

    @ApiProperty({ example: "Chennai", description: "address of the User" })
    address: string;

    @ApiProperty({ example: 1, description: "organization Id" })
    @IsOptional()
    orgId?: number;
}
