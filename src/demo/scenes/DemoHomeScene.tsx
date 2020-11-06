import React from 'react';
import authMiddleware from '../../hoc/auth-middleware';
import Loading from '../components/Loading';

const DemoHomeScene = (): JSX.Element => <p>HOME</p>;

export default authMiddleware(DemoHomeScene, Loading);
