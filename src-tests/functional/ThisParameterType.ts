import type {ThisParameterType} from "@devtypes/functional"
// Examples from the documentation
type Fn = ( this: { x: number }, y: string ) => void;
type ThisType = ThisParameterType< Fn >;  // { x: number }
