import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Organizations } from "../../models/organizations.model";
import { Users } from "../../models/user.model";
import { UserDetails } from "../../models/user.details.model";
import { UsersService } from "./user.service";
import { UsersController } from "./users.controller";

@Module({
    imports: [SequelizeModule.forFeature([Users, UserDetails, Organizations])],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
