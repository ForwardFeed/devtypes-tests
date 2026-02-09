import type {Widen} from "@devtypes/util"
// Examples from the documentation
type A = Narrow< 'hello' >;  // string
type B = Narrow< true >;     // boolean
