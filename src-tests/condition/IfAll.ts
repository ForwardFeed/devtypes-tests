import type {IfAll} from "@devtypes/condition"
// Examples automatically extracted from the documentation.
type A = IfAll< [ true, true ], 'ok', 'fail' >;   // 'ok'
type B = IfAll< [ true, false ], 'ok', 'fail' >;  // 'fail'
// Manually written content.
