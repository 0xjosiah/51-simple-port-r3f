import { Center, Float, Html, useGLTF } from "@react-three/drei"
import Screen from "./Screen"

export default function ComputerModel(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return (
        <Float rotationIntensity={ .4 }>
            <rectAreaLight
                width={ 2.5 }
                height={ 1.65 }
                intensity={ 65 }
                // color={ '#ff6900' }
                rotation={ [ - 0.1, Math.PI, 0 ] }
                position={ [ 0, 0.55, - 1.15 ] }
            />
            <primitive object={ scene } position-y={ -1.2 }>
                <Screen />
            </primitive>
        </Float>
    )
}