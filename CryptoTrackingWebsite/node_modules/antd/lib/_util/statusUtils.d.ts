import { ValidateStatus } from '../form/FormItem';
declare const InputStatuses: ["warning", "error", ""];
export declare type InputStatus = typeof InputStatuses[number];
export declare const getFeedbackIcon: (prefixCls: string, status?: "" | "error" | "success" | "warning" | "validating" | undefined) => JSX.Element | null;
export declare function getStatusClassNames(prefixCls: string, status?: ValidateStatus, hasFeedback?: boolean): string;
export declare const getMergedStatus: (contextStatus?: "" | "error" | "success" | "warning" | "validating" | undefined, customStatus?: "" | "error" | "warning" | undefined) => "" | "error" | "success" | "warning" | "validating" | undefined;
export {};
