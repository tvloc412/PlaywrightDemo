import { Page } from "@playwright/test";

export default class Utils {
    page: Page;
    constructor(page) {
        this.page = page;
    }

    preventPopup = async () => {
        await this.page.addInitScript(() => {
            window.localStorage.setItem(
                "klaviyoOnsite",
                '{"viewedForms":{"modal":{"disabledForms":{"R3Dacp":{"lastCloseTime":1708327293}},"viewedForms":{"R3Dacp":8275960},"disabledTeasers":{}}}}'
            );
        });
    };
}
