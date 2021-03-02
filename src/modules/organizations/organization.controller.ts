import { Body, Controller, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { OrganizationsResponseDto } from "../../dtos/oraganization-response.dto";
import { OrganizationsService } from "./organization.service";

@ApiTags("organizations")
@Controller("organizations")
export class OrganizationsController {
    constructor(private readonly organizationsService: OrganizationsService) {}

    @Get()
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Organizations list",
        type: OrganizationsResponseDto,
    })
    async getOrganizations(): Promise<any[]> {
        return this.organizationsService.findAll();
    }

    @Get("/:organizationId/users")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Get User",
        type: OrganizationsResponseDto,
    })
    @ApiParam({ name: "organizationId", description: "organizationId", example: 1 })
    async getUser(@Param("organizationId") id: string): Promise<any> {
        const result = await this.organizationsService.findOne(Number(id));
        return result;
    }

}
