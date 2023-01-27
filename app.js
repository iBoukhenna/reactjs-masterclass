function render() {
    const title = React.createElement('h1', {}
        , 'Hello World ! '
    );

    const container = document.querySelector('#app');
    const root = ReactDOM.createRoot(container);
    root.render(title);
}

render();