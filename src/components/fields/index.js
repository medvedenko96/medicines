import { Input as AntdInput } from 'antd';
import makeField from './makeField';

const textAreaProps = { autoSize: { minRows: 3, maxRows: 6 } };

export const Input = makeField(AntdInput, {});
export const TextArea = makeField(AntdInput.TextArea, textAreaProps);
