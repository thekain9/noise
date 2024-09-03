import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState, useRef, useEffect } from 'react';
import Modelview from './Modelview';
import { yellowImg } from '../utils';
import * as THREE from 'three';
import { View } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useDispatch } from 'react-redux';

import { models } from '../constants';
import { AnimateWithGsapTimeline } from '../utils/animations';
import { addItemToCart, removeItemFromCart } from '../utils/state/cartslice';

const Model = () => {
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        id: 1,
        title: 'Nebulox Original',
        color: ['#9BB9BF', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
        price: 199
    });

    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);
    const tl = gsap.timeline();
    const dispatch = useDispatch();

    useEffect(() => {
        if (size === 'large') {
            AnimateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2,
            });
        }
        if (size === 'small') {
            AnimateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
                transform: 'translateX(0)',
                duration: 2,
            });
        }
    }, [size]);

    useGSAP(() => {
        gsap.to('#heading', {
            y: 0,
            opacity: 1,
        });
    }, []);

    const handleAddToCart = () => {
        dispatch(addItemToCart(model));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeItemFromCart(model));
    };

    return (
        <section className="pt-10 pb-10 px-4 sm:px-8">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading pt-8 text-center">
                    Take a close look.
                </h1>

                <div className="flex flex-col items-center mt-2">
                    <div className="w-full h-[50vh] sm:h-[75vh] md:h-[90vh] overflow-hidden relative">
                        {/* Modelview component for the small model */}
                        <Modelview
                            index={1}
                            groupRef={small}
                            gsapType="view1"
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size}
                            className="w-full h-full sm:w-[50%] sm:h-[50%] mx-auto"
                        />
                        {/* Modelview component for the large model */}
                        <Modelview
                            index={2}
                            groupRef={large}
                            gsapType="view2"
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={model}
                            size={size}
                            className="w-full h-full sm:w-[50%] sm:h-[50%] mx-auto"
                        />
                        <Canvas
                            className="w-full h-full"
                            style={{
                                position: 'fixed',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden',
                            }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>

                    <div className="mx-auto w-full">
                        <p className="text-sm font-light text-center mb-1">
                            {model.title}
                        </p>
                        <div className="flex-center">
                            <ul className="color-container">
                                {models.map((item, i) => (
                                    <li
                                        key={i}
                                        className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                                        style={{
                                            backgroundColor: item.color[0],
                                        }}
                                        onClick={() => setModel(item)}
                                    />
                                ))}
                            </ul>

                            <button className="px-8">
                                <span className="btn" onClick={handleAddToCart}>
                                    Buy
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Model;

