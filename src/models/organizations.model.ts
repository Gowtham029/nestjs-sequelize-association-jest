import {
    AutoIncrement,
    Column,
    CreatedAt,
    HasMany,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from "sequelize-typescript";
import { UserDetails } from "./user.details.model";

@Table({ tableName: "organizations", freezeTableName: false, timestamps: false })
export class Organizations extends Model<Organizations> {
    @PrimaryKey
    @AutoIncrement
    @Column
    orgId: number;

    @Column
    name: string;

    @Column
    address: string;

    @Column
    country: string;

    @Column
    zipcode: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @HasMany(() => UserDetails)
    users: UserDetails[];
}
