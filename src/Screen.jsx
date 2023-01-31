import { Html } from '@react-three/drei'

export default function Screen() {
    return (
        <Html
            transform
            wrapperClass='htmlScreen'
            distanceFactor={ 1.17 }
        >
            <iframe src="https://0xjosiah.xyz/" />
        </Html>
    )
}