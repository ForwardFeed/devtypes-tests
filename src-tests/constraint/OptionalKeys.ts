import type {OptionalKeys} from "@devtypes/constraint"

// Examples automatically extracted from the documentation.
type Obj = { a: number; b?: string; c: number | undefined; d: boolean };
type OptKeys = OptionalKeys< Obj >;  // 'b' | 'c'

// Manually written content.
