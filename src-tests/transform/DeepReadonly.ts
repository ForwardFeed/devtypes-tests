import type {DeepReadonly} from "@devtypes/transform"
// Examples automatically extracted from the documentation.
type User = { id: number; profile: { name: string; address: { city: string } } };
type Readonly = DeepReadonly< User >;
// { readonly id: number; readonly profile: {
//    readonly name: string; readonly address: { readonly city: string }
// } }
// Manually written content.
