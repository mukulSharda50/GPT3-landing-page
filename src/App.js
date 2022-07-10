import './App.css';
import { Blog, Feature, Footer, Header, Possibility, WhatGPT3} from './containers';
import { CTA, Brand, Navbar } from './comp';

const App = ()=>{
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Feature />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />  
        </div>
    );
}
export default App;