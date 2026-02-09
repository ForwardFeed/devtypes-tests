import type {PartiallyMapped} from "@devtypes/object"

// Examples extracted from the documentation.
const stringValidator: PartiallyMapped< 'username' | 'email', ( field: string ) => boolean > = {
  username: ( field: string ) => regex.test( 'username', field )
};

// Manually written content.
