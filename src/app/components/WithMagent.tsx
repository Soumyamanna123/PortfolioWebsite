import { useState, useEffect, ComponentType, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const SPRING_CONFIG = { damping: 50, stiffness: 500 } // More responsive and snappy
const MAX_DISTANCE = 1 // Increased for a stronger magnetic pull

export const withMagnet = (Component): ComponentType => {
    return (props) => {
        const [isHovered, setIsHovered] = useState(false)
        const x = useMotionValue(0)
        const y = useMotionValue(0)
        const ref = useRef<HTMLDivElement | null>(null)
        const springX = useSpring(x, SPRING_CONFIG)
        const springY = useSpring(y, SPRING_CONFIG)

        useEffect(() => {
            const calculateDistance = (e: MouseEvent) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect()
                    const centerX = rect.left + rect.width / 2
                    const centerY = rect.top + rect.height / 2
                    const distanceX = e.clientX - centerX
                    const distanceY = e.clientY - centerY

                    if (isHovered) {
                        x.set(distanceX * MAX_DISTANCE)
                        y.set(distanceY * MAX_DISTANCE)
                    } else {
                        x.set(0)
                        y.set(0)
                    }
                }
            }

            document.addEventListener("mousemove", calculateDistance)

            return () => {
                document.removeEventListener("mousemove", calculateDistance)
            }
        }, [isHovered, x, y])

        return (
            <motion.div
                ref={ref}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    x: springX,
                    y: springY,
                    display: "inline-block",
                }}
            >
                <Component {...props} />
            </motion.div>
        )
    }
}
