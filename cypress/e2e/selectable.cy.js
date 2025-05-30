import { SelectablePage } from '../pages/selectablePage';

const selectablePage = new SelectablePage();

describe('Selectable Grid Tests', () => {

  beforeEach(() => {
    // Block ad
    Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore errors from ad script
  if (err.message.includes('Script error.') || err.message.includes('googlesyndication') || err.message.includes('stat-rock')) {
    return false; // prevent Cypress from failing the test
  }
});


  it('Selects even items and validates selection state', () => {
    selectablePage.visit();
    selectablePage.clickGridTab();

    const selectedItems = ['Two', 'Four', 'Six', 'Eight'];
    const notSelectedItems = ['One', 'Three', 'Five', 'Seven', 'Nine'];

    selectablePage.clickItems(selectedItems);
    selectablePage.assertSelected(selectedItems);
    selectablePage.assertNotSelected(notSelectedItems);
  });
});
