import { TextFieldIcon } from './text-field-icon';
import { runCvaContract } from '@template/testing/cva-contract';

runCvaContract<string>('TextFieldIcon', {
  component: TextFieldIcon, nativeSelector: 'input', writtenValue: 'hola',
  readView: (el) => el.value,
  userInput: (el) => { el.value = 'hola'; el.dispatchEvent(new Event('input')); return 'hola'; }
});
