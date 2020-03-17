import { expect } from 'chai';
import axios from 'axios';

describe('Test - Try For Free Buttons', () => {
  before('Should open page', function () {
    browser.url('https://asana.com/');
    browser.maximizeWindow();
  });

  const arrTryForFreeButtons = [];
  const arrTryForFreeLinks = [];

  const links = $$('//a[@href="/create-account"]');

  for (let i = 0; i < links.length; i++) {
    if(links[i].getText() === 'Try for free' || links[i].getText() === 'Try with my team for free') {
      arrTryForFreeButtons.push(links[i]);
      arrTryForFreeLinks.push(links[i].getAttribute('href'));
    }
  }

  it('should verify all `Try For Free` buttons are clickable ', function () {
    arrTryForFreeButtons.forEach(button => {
      return expect(button.isClickable()).to.be.true;
    });
  });

  it('should verify all links get success response',async () => {
    for (let i = 0; i < arrTryForFreeLinks.length; i++) {
      const response = await axios({
        method: 'get',
        url: arrTryForFreeLinks[i],
      })
        .then(res => res)
        .catch(err => err);
      expect(response.status).equal(200);
    }
  });
});