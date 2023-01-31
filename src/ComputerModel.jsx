import { Center, Float, Html, Text, useGLTF } from "@react-three/drei"
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
            <Text
                font="./shadows-into-light-v15-latin-regular.woff"
                fontSize={ 1 }
                color='#f0dfe0'
                position={[ 2, .75, .75 ]}
                rotation-y={ -1.25 }
                maxWidth={ 2 }
                lineHeight={ 1.2 }
                castShadow={ false }
            >
                Josiah Webb
            </Text>
        </Float>
    )
}