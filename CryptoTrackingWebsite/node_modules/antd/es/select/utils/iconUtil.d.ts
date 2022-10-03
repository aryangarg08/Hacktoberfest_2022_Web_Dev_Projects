import * as React from 'react';
import { ValidateStatus } from '../../form/FormItem';
export default function getIcons({ suffixIcon, clearIcon, menuItemSelectedIcon, removeIcon, loading, multiple, hasFeedback, status, prefixCls, showArrow, }: {
    suffixIcon?: React.ReactNode;
    clearIcon?: React.ReactNode;
    menuItemSelectedIcon?: React.ReactNode;
    removeIcon?: React.ReactNode;
    loading?: boolean;
    multiple?: boolean;
    hasFeedback?: boolean;
    status?: ValidateStatus;
    prefixCls: string;
    showArrow?: boolean;
}): {
    clearIcon: React.ReactNode;
    suffixIcon: JSX.Element | (({ open, showSearch }: {
        open: boolean;
        showSearch: boolean;
    }) => JSX.Element);
    itemIcon: {} | null;
    removeIcon: {} | null;
};
