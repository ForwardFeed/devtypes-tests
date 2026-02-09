import type {MethodNames} from "@devtypes/class"
// Examples from the documentation
class Service { getData() {} setData() {} value = 123; }
type Methods = MethodNames< Service >; // 'getData' | 'setData'
