import { test, Page } from "@playwright/test";
import Pages from "../pages/Pages";
import { ConfigReader } from "../config/ConfigReader";
import Utils from "../helper/Utils";

test.describe("Test suite", () => {
    const utils = new Utils();
    test.beforeEach(async ({ page }) => {
        await utils.preventPopup(page);
    });

    test("Test 1", async ({ page }) => {
        const pages = await new Pages(page);
        const productName = "coconut milk";
        const productToAddToCart1 = "Lite Coconut Milk 13.5 Ounce Size - 12 Per Case.";
        const productToAddToCart2 = "Thai Kitchen Coconut Milk 6 Pound Each - 6 Per Case.";

        await pages.base.visitHomePage();
        await pages.base.searchForProduct(productName);
        await pages.products.verifySearchResultHeader(`Products fo "${productName}"`);

        await pages.products.clickAddProducToCart(productToAddToCart1);
        await pages.products.clickAddProducToCart(productToAddToCart2);

        await pages.base.gotoPageCheckout();

        await pages.checkout.verifyProductInCheckoutList(productToAddToCart1);
        await pages.checkout.verifyProductInCheckoutList(productToAddToCart2);
    });

    // test("Test 2", async ({ page }) => {
    //     const pages = await new Pages(page);
    //     const productName = "coconut milk";
    //     const productToAddToCart1 = "Lite Coconut Milk 13.5 Ounce Size - 12 Per Case.";
    //     const productToAddToCart2 = "Thai Kitchen Coconut Milk 6 Pound Each - 6 Per Case.";

    //     await pages.base.visitHomePage();
    //     await pages.base.searchForProduct(productName);
    //     await pages.products.verifySearchResultHeader(`Products for "${productName}"`);

    //     await pages.products.clickAddProducToCart(productToAddToCart1);
    //     await pages.products.clickAddProducToCart(productToAddToCart2);

    //     await pages.base.gotoPageCheckout();

    //     await pages.checkout.verifyProductInCheckoutList(productToAddToCart1);
    //     await pages.checkout.verifyProductInCheckoutList(productToAddToCart2);
    // });
});
