import Content from "./Content.js";
import Footer from "./Footer.js";
import Nav from "./Nav.js";

const App = () => {
    return (
        <>
            <Nav/>
            <Content/>
            <Footer/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));