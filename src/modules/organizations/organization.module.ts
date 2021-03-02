import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Organizations } from "../../models/organizations.model";
import { Users } from "../../models/user.model";
import { UserDetails } from "../../models/user.details.model";
import { OrganizationsService } from "./organization.service";
import { OrganizationsController } from "./organization.controller";

@Module({
    imports: [SequelizeModule.forFeature([Users, UserDetails, Organizations])],
    providers: [OrganizationsService],
    controllers: [OrganizationsController],
})
export class OrganizationsModule {}
