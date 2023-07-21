import { Stack, SxProps, Theme } from '@mui/material'

interface Props {
  children?: React.ReactNode
  sx?: SxProps<Theme>
}

const Navbar = ({ children, sx = {}, ...props }: Props) => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={0.2}
      sx={{
        cursor: 'pointer',
        color: 'text.secondary',
        ':hover': {
          color: 'text.primary'
        },
        ...sx
      }}
      {...props}
    >
      {children}
    </Stack>
  )
}

export default Navbar
