import type {PartiallyMapped} from "@devtypes/object"
// Examples from the documentation
const stringValidator: PartiallyMapped< 'username' | 'email', ( field: string ) => boolean > = {
  username: ( field: string ) => regex.validate( 'username', field )
};
