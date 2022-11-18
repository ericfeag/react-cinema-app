import React from 'react';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = (props) =>{
    const elements = useRoutes([
        {
            path: '/',
            element: <Main {...props} />
        },
        {
            path: '/cinema-app',
            element: <Details {...props} />
        }   
    ]);

    return elements;
}