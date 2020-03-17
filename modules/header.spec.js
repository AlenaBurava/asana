import axios from "axios";
import {expect} from "chai";

describe('TEST ASANA', () => {
    before('go to asana.com', () => {
        browser.url('https://www.asana.com/');
        browser.maximizeWindow();
    });

    it('should verify header items', () =>{
        browser.$('//button[@id="navigation__dropdown-toggle-why-asana"]').click();
        browser.pause(500);
        browser.$('//h4[contains(text(), "Asana Overview")]').click();
        expect(($('//h1').getText()).includes("The easiest way to manage team projects and tasks")).true;
        browser.pause(500);
    });
});
