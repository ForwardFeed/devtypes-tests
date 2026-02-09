import type {IfNon} from "@devtypes/condition"
// Examples from the documentation
type A = IfNon< [ false, false ], 'ok', 'fail' >;  // 'ok'
type B = IfNon< [ false, true ], 'ok', 'fail' >;   // 'fail'
