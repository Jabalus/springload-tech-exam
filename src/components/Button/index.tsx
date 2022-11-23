import React, { useState, ChangeEvent } from 'react'
import { StyledButton } from './styles'

type ButtonPropTypes = {
  primary?: boolean
  label?: string
  onClick: any
  fluid?: boolean
  children: React.ReactNode
  className?: string
}

const Button = ({ className, label, onClick, primary, fluid, children }: ButtonPropTypes) => {
  return (
    <StyledButton className={className} onClick={onClick} $primary={primary} $fluid={fluid}>
      {children ? children : label}
    </StyledButton>
  )
}

export default Button
