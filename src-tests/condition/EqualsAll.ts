import type {EqualsAll} from "@devtypes/condition"
// Examples from the documentation
type A = EqualsAll< [ string, string, string ] >;   // true
type B = EqualsAll< [ boolean, number, number ] >;  // false
