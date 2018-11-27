import * as React from 'react';
import Feed from './features/feed';
import Header from './features/header';
import Profile from './features/profile';

const App: React.FunctionComponent = () => (
    <div className="home">
        <Header />
        <Profile />
        <Feed />
    </div>
);

export default App;
