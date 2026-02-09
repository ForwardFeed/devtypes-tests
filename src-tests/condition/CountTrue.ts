import type {CountTrue} from "@devtypes/condition"

// Examples automatically extracted from the documentation.
type A = CountTrue< [ true, false, true ] >;  // 2
type B = CountTrue< [ false, false ] >;       // 0

// Manually written content.
