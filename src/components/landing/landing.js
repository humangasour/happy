import React from 'react';
import classes from './Landing.module.css';
import {useSpring, animated} from 'react-spring';
import Typist from 'react-typist';

const Landing = () => {
    const props = useSpring({
        opacity: 1, 
        marginTop: 0,
        from: {opacity: 0, marginTop: -1500},
        confid: 'wobbly'
    })

    return (
        <animated.div style={props} className={classes.container}>
            <Typist startDelay={1000} cursor={{show: false}}>
                <h1 className={classes.heading}>Hey Ranya<Typist.Backspace count={5} delay={1000} />Hannah</h1>
                <h1 className={classes.heading} style={{marginTop: '20px'}}>Welcome to your happy place.</h1>
            </Typist>
        </animated.div>
    )
}

export default Landing;