import type {NonNullableProps} from "@devtypes/constraint"
// Examples automatically extracted from the documentation.
type User = { id: number | null; name?: string | undefined; email: string | null };
type NonNullableUser = NonNullableProps< User, 'id' | 'name' >;
// { id: number; name?: string | undefined }
// Manually written content.
