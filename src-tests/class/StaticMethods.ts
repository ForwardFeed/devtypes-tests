import type {StaticMethods} from "@devtypes/class"
// Examples automatically extracted from the documentation.
class Helpers { static parse() {} static stringify() {} }
type StaticMethodsObj = StaticMethods< typeof Helpers >;
// { parse: () => ...; stringify: () => ...; }
// Manually written content.
