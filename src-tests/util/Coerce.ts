import type {Coerce} from "@devtypes/util"
// Examples from the documentation
type A = Coerce< string, string | number >;   // string
type B = Coerce< number, string | number >;   // number
type C = Coerce< boolean, string | number >;  // string | number
