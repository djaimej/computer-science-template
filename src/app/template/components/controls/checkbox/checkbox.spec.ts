import { Checkbox } from './checkbox';
import { runCvaContract } from '@template/testing/cva-contract';
import { ICON_TEST_PROVIDERS } from '@template/testing/icon-testing';

runCvaContract<boolean>('Checkbox', {
  component: Checkbox,
  nativeSelector: 'input[type="checkbox"]',
  writtenValue: true,
  readView: (input) => input.checked,
  userInput: (input) => {
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    return true;
  },
  providers: [...ICON_TEST_PROVIDERS],
});
