import type {PickByValue} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type Obj = { a: number; b: string; c: number; d: boolean };
type NumProps = PickByValue< Obj, number >;  // { a: number; c: number }

// Manually written content.
