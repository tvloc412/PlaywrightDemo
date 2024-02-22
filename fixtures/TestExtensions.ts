import { test as base } from "@playwright/test";
import Pages from "../pages/Pages";
import Utils from "../helper/Utils";

export const test = base.extend<{ pages: Pages; utils: Utils }>({
    pages: async ({ page }, use) => {
        await use(new Pages(page));
    },
    utils: async ({ page }, use) => {
        await use(new Utils(page));
    }
});
