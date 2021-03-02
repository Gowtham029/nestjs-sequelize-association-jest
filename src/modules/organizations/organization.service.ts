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
    ) {}

    public async findAll(): Promise<Organizations[]> {
        return this.organizationModel.findAll();
    }

    public async findOne(orgId: number): Promise<any> {
        return this.organizationModel.findAll({
            include: [
                {
                    model: UserDetails,
                    include: [{ model: Users, required: true }],
                    required: true,
                    attributes: ["userId"],
                },
            ],
            where: {
                orgId,
            },
        });
    }
}
