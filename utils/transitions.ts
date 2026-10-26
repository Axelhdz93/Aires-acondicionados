import { Variants } from "motion";

export const fadeIn = (): Variants => {
    return {
        hidden: {
            y: 80,
            opacity: 0,
            x: 0, 
            transition: {
                type: "tween",
                duration: 0.5,
                delay: 0.5,
                ease: "easeIn",
            }
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: "easeOut",
            }
        }
    }
};