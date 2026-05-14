import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei"
import { useRef } from "react"

function AnimatedSphere() {

    const meshRef = useRef()

    useFrame(() => {

        if (meshRef.current) {

            meshRef.current.rotation.x += 0.002
            meshRef.current.rotation.y += 0.003
        }
    })

    return (

        <Float
            speed={2}
            rotationIntensity={2}
            floatIntensity={2}
        >

            <Sphere
                ref={meshRef}
                args={[1, 100, 200]}
                scale={2.5}
            >

                <MeshDistortMaterial
                    color="#7c3aed"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0}
                />

            </Sphere>

        </Float>

    )
}

function FloatingSphere() {

    return (

        <div className="absolute inset-0">

            <Canvas>

                <ambientLight intensity={1.5} />

                <directionalLight position={[2, 1, 1]} />

                <AnimatedSphere />

            </Canvas>

        </div>
    )
}

export default FloatingSphere