import '../Styles/Home.css';

function NotFound() {
    return (
        <div className="container">
            <h1 className="name not-found">Page not found. Click <a href="/">here</a> to go home.</h1>
            <div className="shape-blob"/>
            <div className="shape-blob two"/>
            <div className="shape-blob three"/>
            <div className="shape-blob four"/>
        </div>
    );
}

export default NotFound;