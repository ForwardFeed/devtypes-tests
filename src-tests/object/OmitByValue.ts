import type {OmitByValue} from "@devtypes/object"
// Examples from the documentation
type Obj = { a: number; b: string; c: number; d: boolean };
type NonNumProps = OmitByValue< Obj, number >;  // { b: string; d: boolean }
