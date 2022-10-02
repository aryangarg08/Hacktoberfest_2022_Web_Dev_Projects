import Row from './row';
import Col from './col';
import useInternalBreakpoint from './hooks/useBreakpoint'; // Do not export params

function useBreakpoint() {
  return useInternalBreakpoint();
}

export { Row, Col };
export default {
  useBreakpoint: useBreakpoint
};