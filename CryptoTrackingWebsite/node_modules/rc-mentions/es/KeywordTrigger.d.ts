import * as React from 'react';
import type { OptionProps } from './Option';
import type { Direction, Placement } from './Mentions';
interface KeywordTriggerProps {
    loading?: boolean;
    options: OptionProps[];
    prefixCls?: string;
    placement?: Placement;
    direction?: Direction;
    visible?: boolean;
    transitionName?: string;
    children?: React.ReactElement;
    getPopupContainer?: () => HTMLElement;
    dropdownClassName?: string;
}
declare class KeywordTrigger extends React.Component<KeywordTriggerProps, {}> {
    getDropdownPrefix: () => string;
    getDropdownElement: () => JSX.Element;
    getDropDownPlacement: () => string;
    render(): JSX.Element;
}
export default KeywordTrigger;
