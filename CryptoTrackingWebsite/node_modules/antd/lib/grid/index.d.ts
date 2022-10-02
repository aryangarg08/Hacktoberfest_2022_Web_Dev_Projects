import Row from './row';
import Col from './col';
declare function useBreakpoint(): Partial<Record<import("../_util/responsiveObserve").Breakpoint, boolean>>;
export { RowProps } from './row';
export { ColProps, ColSize } from './col';
export { Row, Col };
declare const _default: {
    useBreakpoint: typeof useBreakpoint;
};
export default _default;
