import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCnkW0BzfddubGwIv_raeCNw-LcepmidQE';
//video 9 : 00:49
//react diverge into 2 librairies - core react React knows how to work with react components (nested/render etc)
// to insert into DOM we need react-dom library

//Step 1: Create a new component. This component shoulkd produce some HTML

/**
 * it's a class not an instance of component //video 10
 * const App = function(){
    return <div>Hi</div>; // = JSX becuase HTML found in JS
    }

 */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
            //video 22 - using es6 thing, videos in (videos) is the same as setState({videos:videos})
        });

    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/> {/* video 23- passing value from parent to child use like NG*/}
            </div>// = JSX becuase HTML found in JS
        );
    }

}

// Step 2: Take this component's generated HTML and put it on the page in DOM
//first mistake to learn
//we use reactdom to insert react stuffs into DOM

//to use class into an instance of component just ReactDom.render(<App />, document.querySelector('.container');
// to bind to the root of document (index.html)video 11
ReactDom.render(<App/>, document.querySelector('.container'));

//TWO THINGS
//reactdom is to interact with DOM elements
//react is to craete and manage react components

/* video 21 - 01:10
    Downwards data flow - only most parent component is responsible for fetching data
 */