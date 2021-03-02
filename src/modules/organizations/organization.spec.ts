import { Test } from "@nestjs/testing";
import { getModelToken } from "@nestjs/sequelize";
import { Organizations } from "../../models/organizations.model";
import { OrganizationsService } from "./organization.service";
import { OrganizationsController } from "./organization.controller";

const mockData = { name: "Org1", address: "Karthick", country: "India", zipcode: "123455" };

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
                        findAll: jest.fn(() => [mockData]),
                    },
                },
            ],
        }).compile();
        service = moduleReference.get(OrganizationsService);
        controller = moduleReference.get(OrganizationsController);
    });

    it("** Service - Should get the users **", async () => {
        expect(await service.findAll()).toEqual([mockData]);
    });

    it("** Controller - Should get the users **", async () => {
        expect(await controller.getOrganizations()).toEqual([mockData]);
    });
});
