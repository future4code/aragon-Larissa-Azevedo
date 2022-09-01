"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PingBusiness_1 = require("../../src/business/PingBusiness");
describe("Testing PingBusiness", () => {
    const pingBusiness = new PingBusiness_1.PingBusiness();
    test("deve retornar 'Pong!' em caso de sucesso", async () => {
        const response = await pingBusiness.ping();
        expect(response.message).toBe("Pong!");
    });
});
//# sourceMappingURL=ping.test.js.map