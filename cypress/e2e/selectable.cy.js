import { SelectablePage } from '../pages/selectablePage';

const selectablePage = new SelectablePage();

describe('Selectable Grid Tests', () => {
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
