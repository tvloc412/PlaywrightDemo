import { Page } from "@playwright/test";

export default class Utils {
    preventPopup = async (page: Page) => {
        await page.addInitScript(() => {
            window.localStorage.setItem(
                "klaviyoOnsite",
                '{"viewedForms":{"modal":{"disabledForms":{"R3Dacp":{"lastCloseTime":1708327293}},"viewedForms":{"R3Dacp":8275960},"disabledTeasers":{}}}}'
            );
        });
    };
}
