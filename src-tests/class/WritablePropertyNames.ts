import type {WritablePropertyNames} from "@devtypes/class"

// Examples automatically extracted from the documentation.
class User { readonly id: number; name: string; }
type WritableProps = WritablePropertyNames< User >; // 'name'

// Test automatically generated from examples.
const WritableProps: WritableProps = 'name'

// Manually written content.
