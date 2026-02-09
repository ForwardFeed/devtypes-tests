import type {LiteralUnion} from "@devtypes/primitive"
// Examples from the documentation
type Size = LiteralUnion< 'small' | 'medium' | 'large' >;
// 'small' | 'medium' | 'large' | ( string & {} )
