import { Environment, PresentationControls } from '@react-three/drei'
import ComputerModel from './ComputerModel'

export default function Experience()
{
    return <>

        <color args={[ '#695b5b' ]} attach='background' />

        <PresentationControls />

        <Environment preset='city' />
        
        <ComputerModel />
        
    </>
}