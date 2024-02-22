import { test } from "../fixtures/TestExtensions";

test.describe("Test suite apply page object factory and fixtures", () => {
    test.beforeEach(async ({ utils, pages }) => {
        await utils.preventPopup();
        await pages.base.visitHomePage();
    });

    test("Test 1", async ({ pages }) => {
        const productName = "coconut milk";
        const productToAddToCart1 = "Lite Coconut Milk 13.5 Ounce Size - 12 Per Case.";
        const productToAddToCart2 = "Thai Kitchen Coconut Milk 6 Pound Each - 6 Per Case.";

        await pages.base.visitHomePage();
        await pages.base.searchForProduct(productName);
        await pages.products.verifySearchResultHeader(`Products for "${productName}"`);

        await pages.products.clickAddProducToCart(productToAddToCart1);
        await pages.products.clickAddProducToCart(productToAddToCart2);

        await pages.base.gotoPageCheckout();

        await pages.checkout.verifyProductInCheckoutList(productToAddToCart1);
        await pages.checkout.verifyProductInCheckoutList(productToAddToCart2);
    });
});
