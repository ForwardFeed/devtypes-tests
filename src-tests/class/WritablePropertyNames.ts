import type {WritablePropertyNames} from "@devtypes/class"
// Examples from the documentation
class User { readonly id: number; name: string; }
type WritableProps = WritablePropertyNames< User >; // 'name'
