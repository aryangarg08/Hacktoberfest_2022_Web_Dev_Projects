import * as React from 'react';
import type { SingleCascaderProps as RcSingleCascaderProps, MultipleCascaderProps as RcMultipleCascaderProps, FieldNames, BaseOptionType, DefaultOptionType } from 'rc-cascader';
import type { SizeType } from '../config-provider/SizeContext';
import { SelectCommonPlacement } from '../_util/motion';
import { InputStatus } from '../_util/statusUtils';
export { BaseOptionType, DefaultOptionType };
export declare type FieldNamesType = FieldNames;
export declare type FilledFieldNamesType = Required<FieldNamesType>;
declare type SingleCascaderProps = Omit<RcSingleCascaderProps, 'checkable' | 'options'> & {
    multiple?: false;
};
declare type MultipleCascaderProps = Omit<RcMultipleCascaderProps, 'checkable' | 'options'> & {
    multiple: true;
};
declare type UnionCascaderProps = SingleCascaderProps | MultipleCascaderProps;
export declare type CascaderProps<DataNodeType> = UnionCascaderProps & {
    multiple?: boolean;
    size?: SizeType;
    bordered?: boolean;
    placement?: SelectCommonPlacement;
    suffixIcon?: React.ReactNode;
    options?: DataNodeType[];
    status?: InputStatus;
};
export interface CascaderRef {
    focus: () => void;
    blur: () => void;
}
declare const Cascader: (<OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType>(props: React.PropsWithChildren<CascaderProps<OptionType>> & {
    ref?: React.Ref<CascaderRef> | undefined;
}) => React.ReactElement) & {
    displayName: string;
};
export default Cascader;
