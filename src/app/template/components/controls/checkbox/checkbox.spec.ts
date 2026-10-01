import { Checkbox } from './checkbox';
import { runCvaContract } from '@template/testing/cva-contract';

runCvaContract<boolean>('Checkbox', {
  component: Checkbox,
  nativeSelector: 'input[type="checkbox"]',
  writtenValue: true,
  readView: (input) => input.checked,
  userInput: (input) => {
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    return true;
  }
});
