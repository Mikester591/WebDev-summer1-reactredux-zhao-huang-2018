import React from 'react';
import ReactDOM from 'react-dom';
import Message from '../Components/Message';
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom'

const Page1 = () => {
    return(<h2>Page 1</h2>)
};

const Page2 = () => {
    return(<h2>Page 2</h2>)
};

const PageParam = ({match}) => {
    return(
        <h2>PageParam {match.params.id}
        </h2>
    )
};
class PageUpdate extends React.Component{
    updatePage(id) {
        this.setState({id: id});
    }
    
    componentWillReceiveProps(newProps){
        this.updatePage
        (newProps.match.params.id);
    }


    componentDidMount() {
        this.updatePage
        (this.props.match.params.id);
    }

    render() {
        return (
            <h2>PageUpdate
                {this.state.id}
            </h2>
        );
    }
    constructor(props) {
        super(props);
        this.updatePage =
            this.updatePage.bind(this);
        this.state = {id: ''}
    }}

const App = () => {
    return(
        <Router>
            <div>
                <Link to="/hello">Hello</Link> |
                <Link to="/page1">Page1</Link> |
                <Link to="/page2">Page2</Link> |
                <Link to="/pageParam/123">Page 123</Link> |
                <Link to="/pageParam/234">Page 234</Link>|
                <Link to="/pageUpdate/345">
                    PageUpdate 345</Link>|
                <Link to="/pageUpdate/456" className="btn">
                    PageUpdate 456</Link>
                <Route path='/pageUpdate/:id'
                       component={PageUpdate}/>


                <Route path='/pageParam/:id' component={PageParam}/>

                <Route path='/hello'
                       component={Message}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
            </div>
        </Router>);
};


export default App