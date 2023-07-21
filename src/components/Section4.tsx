import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { section4Content } from '~/utils/content'
import { Card, CustomButton } from '.'

const Section4 = () => {
  const { ITEMS1, ITEMS2, SOCIALS, title1, title2 } = section4Content
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container sx={{ pt: { xs: 10, md: 20 } }}>
      <Typography sx={{ color: 'text.primary', typography: { xs: 'h3', md: 'h2' }, mb: 8 }}>{title1}</Typography>
      <Grid container spacing={3}>
        {ITEMS1.map((item) => (
          <Grid item key={item.title} xs={12} md={6}>
            <Card {...item} />
          </Grid>
        ))}
      </Grid>

      <Container maxWidth={'md'} sx={{ pt: { xs: 10, md: 20 } }}>
        <Typography sx={{ color: 'text.primary', typography: { xs: 'h3', md: 'h2' }, mb: 6, textAlign: 'center' }}>
          Join us
        </Typography>
        <Grid container spacing={3} justifyContent={'center'}>
          {SOCIALS.map((item) => (
            <Grid
              item
              xs={6}
              md={3}
              key={item.name}
              sx={() => ({
                ':hover': {
                  '& img': { transform: 'scale(1.2)', transition: 'transform .3s' },
                  '& p': { color: 'text.primary', transition: 'transform .3s' }
                }
              })}
            >
              <Link to={'/'}>
                <Stack alignItems={'center'}>
                  <img src={item.image} alt={item.name} style={{ width: '120px', objectFit: 'contain' }} />
                  <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    {item.name}
                  </Typography>
                </Stack>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ pt: { xs: 10, md: 20 } }}>
        <Typography sx={{ color: 'text.primary', typography: { xs: 'h3', md: 'h2' }, mb: 8 }}>{title2}</Typography>
        <Grid container rowSpacing={6} spacing={3} sx={{ position: 'relative' }}>
          {ITEMS2.map((item) => (
            <Grid
              item
              key={item.link}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              sx={{
                ':hover': {
                  opacity: 0.8
                }
              }}
            >
              <Link to={item.link}>
                <Box>
                  <img src={item.image} style={{ maxHeight: '60px', objectFit: 'contain' }} />
                </Box>
              </Link>
            </Grid>
          ))}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              height: 80,
              background: 'linear-gradient(180deg, #06070a85, #06070a)'
            }}
          />
        </Grid>
        <CustomButton
          fit={!isSmallScreen}
          isFullWidth={isSmallScreen}
          sx={{
            borderColor: 'text.secondary',
            mt: 6,
            pl: 3,
            pr: 1.5,
            py: 1,
            borderRadius: 3
          }}
        >
          Explore ecosystem
        </CustomButton>
      </Box>
    </Container>
  )
}

export default Section4
