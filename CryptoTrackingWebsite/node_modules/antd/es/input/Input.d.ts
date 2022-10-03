import React from 'react';
import { InputProps as RcInputProps, InputRef } from 'rc-input';
import { SizeType } from '../config-provider/SizeContext';
import { InputStatus } from '../_util/statusUtils';
export interface InputFocusOptions extends FocusOptions {
    cursor?: 'start' | 'end' | 'all';
}
export type { InputRef };
export declare function fixControlledValue<T>(value: T): string;
export declare function resolveOnChange<E extends HTMLInputElement | HTMLTextAreaElement>(target: E, e: React.ChangeEvent<E> | React.MouseEvent<HTMLElement, MouseEvent> | React.CompositionEvent<HTMLElement>, onChange: undefined | ((event: React.ChangeEvent<E>) => void), targetValue?: string): void;
export declare function triggerFocus(element?: HTMLInputElement | HTMLTextAreaElement, option?: InputFocusOptions): void;
export interface InputProps extends Omit<RcInputProps, 'wrapperClassName' | 'groupClassName' | 'inputClassName' | 'affixWrapperClassName'> {
    size?: SizeType;
    status?: InputStatus;
    bordered?: boolean;
    [key: `data-${string}`]: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>>;
export default Input;
