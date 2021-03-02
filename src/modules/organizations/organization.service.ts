import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Organizations } from "../../models/organizations.model";

@Injectable()
export class OrganizationsService {
    constructor(
        @InjectModel(Organizations)
        private organizationModel: typeof Organizations,
    ) {}

    public async findAll(): Promise<Organizations[]> {
        return this.organizationModel.findAll();
    }

    public async findOne(id: number): Promise<Organizations> {
        return this.organizationModel.findOne({
            where: {
                id,
            },
        });
    }
}
