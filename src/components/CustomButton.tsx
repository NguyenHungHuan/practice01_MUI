import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Button, Stack, SxProps, Theme } from '@mui/material'
import React from 'react'

interface Props {
  children?: React.ReactNode
  sx?: SxProps<Theme>
  isFullWidth?: boolean
  fit?: boolean
  isArrow?: boolean
}

const CustomButton = ({ children, sx = {}, isFullWidth = false, isArrow = true, fit, ...props }: Props) => {
  return (
    <Button
      fullWidth={isFullWidth}
      sx={{
        px: 0,
        width: fit ? 'fit-content' : 'a',
        borderRadius: 4,
        color: 'text.primary',
        borderColor: 'text.primary',
        ':hover': {
          borderColor: 'text.primary',
          backgroundColor: '#ffffff33'
        },
        ...sx
      }}
      variant='outlined'
      {...props}
    >
      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
        {children}
        {isArrow && <KeyboardArrowRightIcon />}
      </Stack>
    </Button>
  )
}

export default CustomButton
