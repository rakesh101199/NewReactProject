import React, { useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import authContext from '../../store/auth-context';


const Home = (props) => {
  const ctx = useContext(authContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button type='button' onClick = {ctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
