import type {MethodNames} from "@devtypes/class"

// Examples automatically extracted from the documentation.
class Service { getData() {} setData() {} value = 123; }
type Methods = MethodNames< Service >; // 'getData' | 'setData'

// Test automatically generated from examples.
const Methods: Methods = 'getData' | 'setData'

// Manually written content.
