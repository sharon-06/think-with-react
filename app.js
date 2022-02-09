// let container = document.getElementById('react-container');
// ReactDOM.render('Hello World', container);

// Functional component
const Container = () => {
    return React.createElement(`h1`, null, `Hey ProGrads! Welcome to React Learning`,
        React.createElement(`h2`, null, `Let's rock and roll`),
        React.createElement(`ul`, null, React.createElement(`li`, null, `this is list 1`))
    );
}

// Class component
class ReactComp extends React.Component {
    render() {
        return React.createElement(`h1`, null, `Hey ProGrads! Welcome to React Learning`,
            React.createElement(`h2`, null, `Let's rock and roll`),
            React.createElement(`ul`, null, React.createElement(`li`, null, `this is list 2`))
        );
    }
}

// Babel
let BabelComp = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <ul>This is
                <li>easy</li>
                <li>fast</li>
                <li>good</li>
            </ul>
        </div>
    )
}

// Render the Container
const container = document.getElementById('react-container');
ReactDOM.render(<BabelComp />, container);
