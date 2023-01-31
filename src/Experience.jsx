import { ContactShadows, Environment, PresentationControls } from '@react-three/drei'
import ComputerModel from './ComputerModel'

export default function Experience()
{
    return <>

        <color args={[ '#695b5b' ]} attach='background' />

        <Environment preset='city' />

        <PresentationControls
            global
            rotation={[ .13, .1, 0 ]}
            polar={[ -.4, .2 ]} // vertical rotation limits
            azimuth={[ -1, .75 ]} // horizontal rotation limits
            config={{ mass: 2, tension: 400 }} // config is based on Spring lib
            snap={{ mass: 4, tension: 100 }} // snaps back to og position
        >
            <ComputerModel />
        </PresentationControls>

        <ContactShadows position-y={ -1.2 }/>

    </>
}