import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Footer from './components/Footer';
import Nav from './components/Nav';

const App = () => {
    return (
        <RecoilRoot>
            <Nav/>
            <Footer/>
        </RecoilRoot>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));