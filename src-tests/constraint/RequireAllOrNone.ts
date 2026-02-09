import type {RequireAllOrNone} from "@devtypes/constraint"
// Examples from the documentation
type Test = { a?: string; b?: number; c: boolean };
type Result = RequireAllOrNone< Test, 'a' | 'b' >;
// { a: string; b: number; c: boolean } | { c: boolean; a?: never; b?: never }
