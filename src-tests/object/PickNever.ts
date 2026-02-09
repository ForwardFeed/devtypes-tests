import type {PickNever} from "@devtypes/object"
// Examples from the documentation
type Obj = { a: string; b: never; c: number; d: never };
type Result = PickNever< Obj >;  // { b: never; d: never }
