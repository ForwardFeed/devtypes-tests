import type {JSONBadValueTypes} from "@devtypes/primitive"
// Examples automatically extracted from the documentation.
JSON.stringify( { a: undefined, b: () => {}, c: Symbol( '' ) } )  // '{}'
JSON.stringify( undefined )                                       // undefined
JSON.stringify( () => {} )                                        // undefined
JSON.stringify( Symbol( 's' ) )                                   // undefined
JSON.stringify( [ undefined, () => {}, Symbol( 's' ) ] )          // '[ null, null, null ]'
JSON.stringify( BigInt( 1 ) )                                     // Type Error
// Manually written content.
