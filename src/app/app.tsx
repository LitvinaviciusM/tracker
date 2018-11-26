import * as React from 'react';
import Feed from '../feed';
import Header from '../header';
import Profile from '../profile';

const App: React.FunctionComponent = () => (
    <div className="home">
        <Header />
        <Profile />
        <Feed />
    </div>
);

export default App;
