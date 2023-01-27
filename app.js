const title = React.createElement('h1', {}, 'Hello World !');

console.log(title);

//document.querySelector('#app').innerHTML = '<h1>Hello World !</h1>'

// return warning
//ReactDOM.render(title, document.body);

// from react 18 will be also return an warning
//ReactDOM.render(title, document.querySelector('#app'));

const container = document.querySelector('#app');
const root = ReactDOM.createRoot(container);
root.render(title);