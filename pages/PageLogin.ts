import { Page, expect } from "@playwright/test";

export default class PageLogin {
    page: Page;
    constructor(page) {
        this.page = page;
    }

    txtEmailLogin = () => this.page.locator("input[id='customer[email]']");
    txtPasswordLogin = () => this.page.locator("input[id='customer[password]']");
    btnLogin = () => this.page.locator("//*[@id='main']//button[text()='Login']");
    tblAccount = () => this.page.locator("[data-section-type=account]");

    setEmailLogin = async (email) => {
        await this.txtEmailLogin().fill(email);
    };

    setPasswordLogin = async (password) => {
        await this.txtPasswordLogin().fill(password);
    };

    clickButtonLogin = async () => {
        await this.btnLogin().click();
    };

    verifyLoginSuccess = async () => {
        await expect(this.tblAccount()).toBeVisible();
    };

    login = async (email, password) => {
        await this.setEmailLogin(email);
        await this.setPasswordLogin(password);
        await this.clickButtonLogin();
    };
}
