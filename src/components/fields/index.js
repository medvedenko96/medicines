import { Input as AntdInput } from 'antd';
import makeField from './makeField';

export const Input = makeField(AntdInput);
export const TextArea = makeField(AntdInput.TextArea);
