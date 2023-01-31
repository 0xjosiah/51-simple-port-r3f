import { Center, useGLTF } from "@react-three/drei"

export default function ComputerModel(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return (
        <Center>
            <primitive object={ scene } />
        </Center>
    )
}