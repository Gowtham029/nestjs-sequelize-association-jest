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

@Table({ tableName: "users", freezeTableName: false, timestamps: false })
export class Users extends Model<Users> {
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

    @BelongsTo(() => Organizations, "orgId")
    organizations: Organizations;

    @BelongsTo(() => Users, "userId")
    users: Users;
}
