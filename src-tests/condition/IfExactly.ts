import type {IfExactly} from "@devtypes/condition"
// Examples from the documentation
type A = IfExactly< [ true, false, true ], 2, 'yes', 'no' >;  // 'yes'
type B = IfExactly< [ true, true ], 1, 'yes', 'no' >;         // 'no'
