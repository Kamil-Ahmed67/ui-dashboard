import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Categories></Categories>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;