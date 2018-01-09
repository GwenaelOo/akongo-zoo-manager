import React from 'react';
import AnimationWidget from '../AnimationWidget/AnimationWidget';

import { Tabs, Tab } from 'react-bootstrap'

class AnimationsList extends React.Component {

    componentDidMount() {

    }

    render() {

        let animations = this.props.animationsList;

        const list = [];

        for (let animation in animations) {

            let animationData = {
                animationName: animations[animation].animationName,
                animationPhotoProfil: animations[animation].animationPhotoProfil,
                animationId: animations[animation].animationId
            };    
            list.push(animationData);
        }

        console.log('hey')
        console.log(list)

        return (
            <div>

                {
                 list.map(function (animation) { return <AnimationWidget animationData={animation} />; })
                }

            </div>

        );
    }

}

export default AnimationsList;