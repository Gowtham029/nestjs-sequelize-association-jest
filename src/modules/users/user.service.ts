import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UsersRequestDto } from "src/dtos/users-request.dto";
import { Users } from "../../models/user.model";
import { UserDetails } from "../../models/user.details.model";
import { Organizations } from "../../models/organizations.model";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users)
        private userModel: typeof Users,
        @InjectModel(UserDetails)
        private userdetailsModel: typeof UserDetails,
        @InjectModel(Organizations)
        private organizationsModel: typeof Organizations,
    ) {}

    public async findAll(): Promise<Users[]> {
        return this.userModel.findAll();
    }

    public async findOne(userId: number): Promise<any> {
        return this.userModel.findAll({
            include: [
                {
                    model: UserDetails,
                    include: [{ model: Organizations, required: true, as: "organization" }],
                    required: true,
                    attributes: ["id"],
                },
            ],
            where: {
                userId,
            },
        });
    }

    public async create(data: UsersRequestDto): Promise<void> {
        try {
            const userObject = await this.userModel.findOne({
                where: {
                    email: data.email,
                },
            });
            if (!userObject) {
                const result = await this.userModel.create(data);
                if (data.orgId) {
                    const detailsObject = {
                        userId: result.userId,
                        orgId: data.orgId,
                    };
                    await this.userdetailsModel.create(detailsObject);
                }
            } else {
                const detailsObject = {
                    userId: userObject.userId,
                    orgId: data.orgId,
                };
                await this.userdetailsModel.create(detailsObject);
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}
