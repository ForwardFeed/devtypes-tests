import type {CountTrue} from "@devtypes/condition"
// Examples from the documentation
type A = CountTrue< [ true, false, true ] >;  // 2
type B = CountTrue< [ false, false ] >;       // 0
