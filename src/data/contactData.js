import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6'

export const contactData = [
	{
		id: 1,
		icon: FaPhone,
		title: 'Phone',
		value: "+91 9876543210",
		link: 'tel:919876543210',
	},
	{
		id: 2,
		icon: FaEnvelope,
		title: 'Email',
		value: "ilaya@gmail.com",
		link: 'mailto:example@example.com',
	},
	{
		id: 3,
		icon: FaLocationDot,
		title: 'Location',
		value: "123 Main Street, City, State 12345",
		link: 'https://www.google.com/maps',
	}
]