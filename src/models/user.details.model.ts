import {
    AutoIncrement,
    BelongsTo,
    Column,
    CreatedAt,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from "sequelize-typescript";
import { Organizations } from "./organizations.model";
import { Users } from "./user.model";

@Table({ tableName: "user_details", freezeTableName: false, timestamps: false })
export class UserDetails extends Model<UserDetails> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ForeignKey(() => Users)
    @Column
    userId: number;

    @ForeignKey(() => Organizations)
    @Column
    orgId: number;

    @BelongsTo(() => Users, { as: "user", foreignKey: "userId" })
    user: Users;

    @BelongsTo(() => Organizations, { as: "organization", foreignKey: "orgId" })
    organization: Organizations;
}
