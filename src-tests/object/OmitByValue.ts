import type {OmitByValue} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type Obj = { a: number; b: string; c: number; d: boolean };
type NonNumProps = OmitByValue< Obj, number >;  // { b: string; d: boolean }

// Test automatically generated from examples.
const NonNumProps: NonNumProps = { b: string; d: boolean }

// Manually written content.
