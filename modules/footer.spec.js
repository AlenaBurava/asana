import axios from 'axios';
import {expect} from 'chai';


describe('FOOTER LINKS ARE VALID', () => {
    before('should open asana.com', () => {
        browser.url('https://www.asana.com/');
    });

    let footerLinksCount;
    let linksList = [];

    it('obtain all links in the footer, compile them into list and count it`s number', () => {
        const footerLinks = $$(`//a[@id = "globalFooter"]`);
        footerLinksCount = footerLinks.length;
        for (let i = 1; i <= footerLinksCount; i++){
            let link = $(`(//a[@id = "globalFooter"])[${i}]`).getAttribute('href');
            linksList.push(link);
        }
    });

    it('should send http request for all footer links and get success response', async() => {
        for (let i = 0; i < footerLinksCount; i++) {
            const response = await axios({
                method: 'get',
                url: linksList[i],
            })
                .then(res => res)
                .catch(err => err);
            expect(response.status).eq(200);
        }
        });
});
