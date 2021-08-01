import React, { useState, useEffect } from 'react'
import { InputContainer, InputElement, LabelText } from './styles'

interface AnimatedInputTextProps {
	label: string
	value: string
	type?: string
	themeColor?: string
	stayUp?: boolean
	onChange: (value: string) => void
}

const AnimatedInputText: React.FC<AnimatedInputTextProps> = ({
	label,
	value,
	type,
	themeColor,
	stayUp,
	onChange,
}) => {
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		if (value && !isActive) {
			setIsActive(true)
		}
	}, [value])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value)
	}

	const handleOnFocus = () => {
		setIsActive(true)
	}

	const handleOnBlur = () => {
		if (!value) {
			setIsActive(false)
		}
	}

	return (
		<InputContainer>
			<LabelText
				color={!themeColor ? 'var(--color-green)' : themeColor}
				active={isActive || !!stayUp}
			>
				{label}
			</LabelText>
			<InputElement
				type={!type ? 'text' : type}
				borderColor={!themeColor ? 'var(--color-green)' : themeColor}
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
				onChange={handleChange}
				value={value}
			/>
		</InputContainer>
	)
}

export default AnimatedInputText
