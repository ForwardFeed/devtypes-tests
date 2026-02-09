import type {StaticMethods} from "@devtypes/class"
// Examples from the documentation
class Helpers { static parse() {} static stringify() {} }
type StaticMethodsObj = StaticMethods< typeof Helpers >;
// { parse: () => ...; stringify: () => ...; }
