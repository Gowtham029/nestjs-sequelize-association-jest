import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Organizations } from "../../models/organizations.model";
import { OrganizationsService } from "./organization.service";
import { OrganizationsController } from "./organization.controller";

@Module({
    imports: [SequelizeModule.forFeature([Organizations])],
    providers: [OrganizationsService],
    controllers: [OrganizationsController],
})
export class OrganizationsModule {}
