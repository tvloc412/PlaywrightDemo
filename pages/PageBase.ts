import { Page } from "@playwright/test";
import { ConfigReader } from "../config/ConfigReader";

export default class BasePage {
    page: Page;
    constructor(page) {
        this.page = page;
    }

    // LOCATORS
    btnSearch = () => this.page.locator("button[aria-label=Search]");
    btnCloseDialog = () => this.page.locator("button[aria-label='Close dialog 1']");
    btnCheckoutOnCart = () => this.page.getByRole("button", { name: "Checkout" });
    imgCart = () => this.page.locator("a[aria-controls=mini-cart]");
    txtSearchProduct = () => this.page.locator(".search-bar__input");

    // SINGLE ACTIONS
    visitHomePage = async () => {
        await this.page.goto(ConfigReader.APP_URL);
    };

    setProductSearch = async (productName) => {
        await this.txtSearchProduct().fill(productName);
    };

    clickButtonSearch = async () => {
        await this.btnSearch().click();
    };

    closeDialog = async () => {
        await this.btnCloseDialog().click();
    };

    clickCartIcon = async () => {
        await this.imgCart().click();
    };

    clickButtonCheckoutOnCart = async () => {
        await this.btnCheckoutOnCart().click();
    };

    //COMBINED ACTIONS
    searchForProduct = async (productName) => {
        await this.setProductSearch(productName);
        await this.clickButtonSearch();
    };

    gotoPageCheckout = async () => {
        await this.clickCartIcon();
        await this.clickButtonCheckoutOnCart();
    };
}
