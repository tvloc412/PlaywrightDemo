import { Page } from "@playwright/test";
import PageBase from "./PageBase";
import PageCheckout from "./PageCheckout";
import PageProducts from "./PageProducts";

let base: PageBase | null;
let checkout: PageCheckout | null;
let products: PageProducts | null;

export default class Pages {
    page: Page;
    constructor(page) {
        this.page = page;
        this.reset();
    }

    private reset = () => {
        base = null;
        checkout = null;
        products = null;
    };

    get base() {
        base = base || new PageBase(this.page);
        return base;
    }

    get checkout() {
        checkout = checkout || new PageCheckout(this.page);
        return checkout;
    }

    get products() {
        products = products || new PageProducts(this.page);
        return products;
    }
}
