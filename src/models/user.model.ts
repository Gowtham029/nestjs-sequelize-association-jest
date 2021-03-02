import {
    AutoIncrement,
    BelongsTo,
    Column,
    CreatedAt,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from "sequelize-typescript";
import { UserDetails } from "./user.details.model";

@Table({ tableName: "users", freezeTableName: false, timestamps: true })
export class Users extends Model<Users> {
    @PrimaryKey
    @AutoIncrement
    @Column
    userId: number;

    @Column
    name: string;

    @Column
    email: string;

    @Column
    address: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @HasMany(() => UserDetails)
    users: UserDetails[];
}
