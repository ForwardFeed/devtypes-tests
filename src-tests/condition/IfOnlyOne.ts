import type {IfOnlyOne} from "@devtypes/condition"
// Examples from the documentation
type A = IfOnlyOne< [ false, true, false ], 'yes', 'no' >;  // 'yes'
type B = IfOnlyOne< [ true, true, false ], 'yes', 'no' >;   // 'no'
