import type {IfEquals} from "@devtypes/condition"
// Examples from the documentation
type A = IfEquals< string, string, number, boolean >;  // number
type B = IfEquals< string, number, number, boolean >;  // boolean
