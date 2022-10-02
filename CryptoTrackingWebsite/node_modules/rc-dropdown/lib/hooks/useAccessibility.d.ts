import * as React from 'react';
interface UseAccessibilityProps {
    visible: boolean;
    setTriggerVisible: (visible: boolean) => void;
    triggerRef: React.RefObject<any>;
    menuRef: React.RefObject<HTMLUListElement>;
    menuClassName: string;
    onVisibleChange?: (visible: boolean) => void;
}
export default function useAccessibility({ visible, setTriggerVisible, triggerRef, menuRef, menuClassName, onVisibleChange, }: UseAccessibilityProps): {
    returnFocus: () => void;
};
export {};
