import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { CustomButton } from '.'

interface Props {
  title?: string
  subtitle?: string
  image?: string
}

const Card = ({ subtitle = '', title = '', image = '' }: Props) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        height: '100%',
        position: 'relative',
        p: 4,
        borderRadius: '30px',
        ':before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: '30px',
          border: '1px solid transparent',
          background: 'linear-gradient(120deg,#5f5f61,transparent) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }
      }}
    >
      <Stack sx={{ height: '100%' }}>
        <Typography
          sx={{
            color: 'text.primary',
            typography: {
              xs: 'h4',
              sm: 'h3'
            }
          }}
        >
          {title}
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {subtitle}
        </Typography>
        <img src={image} alt={subtitle} style={{ height: '280px', width: '100%', objectFit: 'contain', flex: 1 }} />
        <CustomButton
          fit={!isSmallScreen}
          isFullWidth={isSmallScreen}
          sx={{
            borderColor: 'text.secondary',
            mt: 2,
            pl: 3,
            pr: 1.5,
            py: 1,
            borderRadius: 3
          }}
        >
          Learn more
        </CustomButton>
      </Stack>
    </Box>
  )
}

export default Card
