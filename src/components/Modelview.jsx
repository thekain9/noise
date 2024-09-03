import React, { Suspense } from 'react';
import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import Lights from './Lights';
import IPhone from '../components/IPhone';
import * as THREE from 'three'
import Loader from './Loader';

// Define the Modelview component, which takes several props as arguments
// The View component is used to create a section of the 3D scene
const Modelview = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View 
        index={index}
        id={gsapType}
        className={` w-full h-full absolute ${index === 2 ? 'right-[-100%]' : '' }`}
        >
      
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        <Lights />

        <OrbitControls
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0, 0, 0)} 
            onEnd={() => setRotationSize(controlRef.current.getAzimuthalAngle())}

            />
        <group ref={groupRef} 
        name={`${index == 1} ? 'small : 'large' `}
        position={[0, -.5
        , 0]}>

        {/* Suspense component to handle loading states for async components */}
            <Suspense fallback={<Loader />}  >
            {/* Render the IPhone component with scaling based on the index */}
                <IPhone
                scale={index ==1 ? [.5, .5, .5] : [17, 17, 17]} 
                item={item}
                size={size}

                />

            </Suspense> 
        </group>
    
    </View>
  )
}

export default Modelview;
