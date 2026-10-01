import { CheckboxItem } from './checkbox-item';
import { runCvaContract } from '@template/testing/cva-contract';

runCvaContract<boolean>('CheckboxItem', {
  component: CheckboxItem,
  nativeSelector: 'input[type="checkbox"]',
  writtenValue: true,
  readView: (input) => input.checked,
  userInput: (input) => { input.checked = true; input.dispatchEvent(new Event('change')); return true; },
});
