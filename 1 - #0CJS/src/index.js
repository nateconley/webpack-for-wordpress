import { greeting, generateGreeting } from './sample-module';
import { dropRight } from 'lodash';

console.log( dropRight( [ 0, 1, 2 ] ) );
console.log( greeting );
console.log( generateGreeting( 'Oslo' ) );
