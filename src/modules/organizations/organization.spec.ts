import { Test } from "@nestjs/testing";
import { getModelToken } from "@nestjs/sequelize";
import { Organizations } from "../../models/organizations.model";
import { OrganizationsService } from "./organization.service";
import { OrganizationsController } from "./organization.controller";

const testUser = { firstName: "Gowtham", lastName: "Karthick" };

describe("OrganizationsService", () => {
    let service: OrganizationsService;
    let controller: OrganizationsController;

    beforeEach(async () => {
        const moduleReference = await Test.createTestingModule({
            controllers: [OrganizationsController],
            providers: [
                OrganizationsService,
                {
                    provide: getModelToken(Organizations),
                    useValue: {
                        findAll: jest.fn(() => [testUser]),
                        create: jest.fn(() => testUser),
                        update: jest.fn(() => testUser),
                        findOne: jest.fn(() => testUser),
                        findByPk: jest.fn().mockResolvedValue({
                            save: jest.fn(),
                        }),
                        save: jest.fn(),
                    },
                },
            ],
        }).compile();
        service = moduleReference.get(OrganizationsService);
        controller = moduleReference.get(OrganizationsController);
    });

    it("** Service - Should get the users **", async () => {
        expect(await service.findAll()).toEqual([testUser]);
    });

    it("** Controller - Should get the users **", async () => {
        expect(await controller.getOrganizations()).toEqual([testUser]);
    });

    it("** Service - should add a User **", async () => {
        await service.create(testUser);
    });

    it("** Controller - should add a User **", async () => {
        await controller.createUser(testUser);
    });

    it("** Service - should get a User **", async () => {
        expect(await service.findOne(1)).toEqual(testUser);
    });

    it("** Controller - should get a User **", async () => {
        expect(await controller.getUser("1")).toEqual(testUser);
    });

    it("** Service - should Update a User **", async () => {
        await service.update(1, testUser);
    });

    it("** Controller - should get a User **", async () => {
        controller.upateUser(testUser, "1");
    });
});
