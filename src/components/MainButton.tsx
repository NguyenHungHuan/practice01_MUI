import { Button, SxProps, Theme } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

interface Props {
  sx?: SxProps<Theme>
  isFullWidth?: boolean
}

const MainButton = ({ sx = {}, isFullWidth = false, ...props }: Props) => {
  return (
    <Button
      fullWidth={isFullWidth}
      variant='contained'
      sx={{
        borderRadius: 4,
        fontWeight: 600,
        ':hover': {
          backgroundColor: '#4399ff'
        },
        ...sx
      }}
      {...props}
    >
      Launch dApp
      <KeyboardArrowRightIcon />
    </Button>
  )
}

export default MainButton
