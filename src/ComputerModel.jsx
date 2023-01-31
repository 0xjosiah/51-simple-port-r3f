import { Center, Float, Html, useGLTF } from "@react-three/drei"

export default function ComputerModel(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return (
        <Float rotationIntensity={ .4 }>
            <primitive object={ scene } position-y={ -1.2 }>
                <Html>hello</Html>
            </primitive>
        </Float>
    )
}