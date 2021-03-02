import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Organizations } from "../../models/organizations.model";
import { Users } from "../../models/user.model";
import { UserDetails } from "../../models/user.details.model";

@Injectable()
export class OrganizationsService {
    constructor(
        @InjectModel(Organizations)
        private organizationModel: typeof Organizations,
        @InjectModel(Users)
        private userModel: typeof Users,
        @InjectModel(UserDetails)
        private userdetailsModel: typeof UserDetails,
    ) {}

    public async findAll(): Promise<Organizations[]> {
        return this.organizationModel.findAll();
    }

    public async findOne(orgId: number): Promise<any> {
        return this.organizationModel.findAll({
            include: [{ model: UserDetails, include: [Users], required: true, attributes: ["id"] }],
            where: {
                orgId,
            },
        });
    }
}
