const hello = 'Hello, Oslo!';
console.log( hello );

const button = document.getElementById( 'button' );

button.addEventListener( 'click', () => {
	import( /* webpackChunkName: "alert" */ './alert' );
});
