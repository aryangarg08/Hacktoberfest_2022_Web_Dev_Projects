import { TextAreaProps as RcTextAreaProps } from 'rc-textarea';
import ResizableTextArea from 'rc-textarea/lib/ResizableTextArea';
import * as React from 'react';
import { SizeType } from '../config-provider/SizeContext';
import { InputStatus } from '../_util/statusUtils';
import { InputFocusOptions } from './Input';
interface ShowCountProps {
    formatter: (args: {
        count: number;
        maxLength?: number;
    }) => string;
}
export interface TextAreaProps extends RcTextAreaProps {
    allowClear?: boolean;
    bordered?: boolean;
    showCount?: boolean | ShowCountProps;
    size?: SizeType;
    status?: InputStatus;
}
export interface TextAreaRef {
    focus: (options?: InputFocusOptions) => void;
    blur: () => void;
    resizableTextArea?: ResizableTextArea;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<TextAreaRef>>;
export default TextArea;
