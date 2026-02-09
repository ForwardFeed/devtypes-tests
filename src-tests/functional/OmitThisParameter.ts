import type {OmitThisParameter} from "@devtypes/functional"
// Examples from the documentation
type Fn = ( this: { x: number }, y: string ) => void;
type WithoutThis = OmitThisParameter< Fn >;
// ( y: string ) => void
