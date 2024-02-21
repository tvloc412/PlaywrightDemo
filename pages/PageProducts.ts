import { Page, expect } from "@playwright/test";

export default class PageProducts {
    page: Page;
    constructor(page) {
        this.page = page;
    }

    headSearchResult = () => this.page.locator("main [class*='title heading']");
    btnTheFirstButtonAddToCart = () => this.page.getByTitle("Add To Cart").first();
    btnAddToCart = (productName) =>
        this.page.locator(
            `//*[contains(@class,"product-item--vertical") and .//*[contains(text(), "${productName}")]]//*[@title="Add To Cart"]`
        );

    clickAddProducToCart = async (productName) => {
        await this.headSearchResult().hover();
        await this.btnAddToCart(productName).first().click();
        await expect(this.btnAddToCart(productName).locator(".addtc-button-checkmark")).toBeVisible({
            timeout: 10000
        });
    };

    verifySearchResultHeader = async (text) => {
        expect(await this.headSearchResult().textContent()).toBe(text);
    };
}
