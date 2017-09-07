import { GatepassngPage } from './app.po';

describe('gatepassng App', () => {
  let page: GatepassngPage;

  beforeEach(() => {
    page = new GatepassngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
