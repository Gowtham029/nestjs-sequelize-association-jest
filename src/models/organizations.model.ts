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
import { Users } from "./user.model";

@Table({ tableName: "organizations", freezeTableName: false, timestamps: false })
export class Organizations extends Model<Organizations> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

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

    @HasMany(() => Users, "id")
    users: Users[];
}
