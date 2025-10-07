import { easeOut } from "motion";

export const iconVariants = {
	hidden: { x: 50, opacity: 0 },
	visible: (i) => ({

		x: 0,
		opacity: 1,
		transition: {
			delay: i * 0.2,
			duration: 0.5,
			ease: easeOut,

		}
	})
}
export const motionVariants = {
	hidden: { x: -50, opacity: 0 },
	visible: (i) => ({

		x: 0,
		opacity: 1,
		transition: {
			delay: i * 0.3,
			duration: 0.5,
			ease: easeOut,

		}
	})
}
export const imageVariants = {
	hidden: { x: 150, opacity: 0 },
	visible: () => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.3,
			duration: 0.9,
			ease: easeOut,

		}
	})
}

export const slideVariants = (
	direction = "left",
	duration = 0.5,
	distance = 100,
	useCustom = true,
) => {
	const x = direction === "left" ? -distance : distance === "right" ? distance : 0;
	const y = direction === "top" ? -distance : distance === "bottom" ? distance : 0;
	return {
		hidden: {
			x,
			y,
			opacity: 0,
		},
		visible: (i) => {
			const animation = {
				x: 0,
				y: 0,
				opacity: 1,
				transition: {
					delay: useCustom ? i * 0.3 : 0,
					duration,
					ease: easeOut,
				}
			}
			if (useCustom) {
				animation.custom = i
			}
			return animation;
		}
	}
}

export const titleVariant = {
	hidden: {
		opacity: 0,
		y: -50,
	},
	visible: {
		opacity: 0.1,
		y: 0,
		transition: { duration: 0.8 }
	}
}
export const subtitleVariant = {
	hidden: {
		opacity: 0,
		y: -45,
	},
	visible: {
		opacity: 0.1,
		y: 0,
		transition: { duration: 0.4 }
	}
}