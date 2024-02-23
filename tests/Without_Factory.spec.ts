import { test } from "@playwright/test";
import PageBase from "../pages/PageBase";
import PageProducts from "../pages/PageProducts";
import PageCheckout from "../pages/PageCheckout";

test.beforeEach(({ page }) => {
    page.addInitScript(() => {
        window.localStorage.setItem(
            "klaviyoOnsite",
            '{"viewedForms":{"modal":{"disabledForms":{"R3Dacp":{"lastCloseTime":1708327293}},"viewedForms":{"R3Dacp":8275960},"disabledTeasers":{}}}}'
        );
    });
});

test("Basic test case", async ({ page }) => {
    const base = new PageBase(page);
    const product = new PageProducts(page);
    const checkout = new PageCheckout(page);
    const productName = "coconut milk";

    await page.goto("https://www.webfoodstore.com/");

    // await base.closeDialog();
    await base.setProductSearch(productName);
    await base.clickButtonSearch();

    await product.verifySearchResultHeader(`Products for "${productName}"`);

    await product.clickAddProducToCart("Coconut Milk 13.5 Ounce Size - 12 Per Case.");
    await product.clickAddProducToCart("Thai Kitchen Coconut Milk 6 Pound Each - 6 Per Case.");

    await base.clickCartIcon();
    await base.clickButtonCheckoutOnCart();

    await checkout.verifyProductInCheckoutList("Coconut Milk 13.5 Ounce Size - 12 Per Case.");
    await checkout.verifyProductInCheckoutList("Thai Kitchen Coconut Milk 6 Pound Each - 6 Per Case.");
});
