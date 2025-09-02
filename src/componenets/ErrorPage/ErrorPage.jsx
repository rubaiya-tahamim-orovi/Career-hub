import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <h2>Damnn!!!</h2>
            <Link to='/'>Go back</Link>
        </div>
    );
};

export default ErrorPage;