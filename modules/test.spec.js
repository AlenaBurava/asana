import axios from "axios";
import {expect} from "chai";

describe('TEST ASANA', () => {
    before('go to asana.com', () => {
        browser.url('https://www.asana.com/');
        browser.refresh();
        browser.pause(2000);
        expect(browser.$('//div[@class="siteHeader__row"]').isDisplayed()).true;
    });

    it('should verify header items', () =>{
        browser.$('//button[@id="navigation__dropdown-toggle-why-asana"]').click();
        browser.pause(500);
        browser.$('//h4[contains(text(), "Asana Overview")]').click();
        browser.pause(500);
    });
});
