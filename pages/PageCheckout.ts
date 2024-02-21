import { Page, expect } from "@playwright/test";

export default class PageCheckout {
    page: Page;
    constructor(page) {
        this.page = page;
    }

    btnPayNow = () => this.page.getByRole("button", { name: "Pay now" });
    tblCheckoutItems = () => this.page.locator("[aria-labelledby=ResourceList0]");
    tblPriceDetails = () => this.page.locator("[aria-labelledby=MoneyLine-Heading0]");

    waitForPageReady = async () => {
        await expect(await this.tblPriceDetails().textContent({ timeout: 30000 })).toContain("Total");
    };

    verifyProductInCheckoutList = async (productName) => {
        await this.waitForPageReady();
        expect(await this.tblCheckoutItems().textContent()).toContain(productName);
    };
}
