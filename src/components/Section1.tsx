import { Box, Container, Grid, Hidden, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import CountUp from 'react-countup'
import useMeasure from 'react-use-measure'
import { section1Content } from '~/utils/content'
import { MainButton, CustomButton } from '.'

const Section1 = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const { title, subtitle, MainBG, CliffImage, HorseImage, ShootingStarImage, TreesImage, items } = section1Content
  const [ref, { height }] = useMeasure()
  return (
    <>
      <Box sx={{ position: 'fixed', zIndex: -10, top: 0, right: 0, left: 0 }}>
        <img src={MainBG} style={{ width: '100%' }} />
      </Box>
      <Box ref={ref} sx={{ position: 'absolute', width: '100%', zIndex: -1, top: 0, right: 0, left: 0 }}>
        <img src={MainBG} style={{ width: '100%', opacity: 0 }} />
        <img src={ShootingStarImage} style={{ position: 'absolute', top: '30px', right: '15%', width: '500px' }} />
        <Hidden mdDown>
          <img src={TreesImage} style={{ position: 'absolute', width: '100%', right: 0, bottom: 50, left: 0 }} />
        </Hidden>
        <img
          src={CliffImage}
          style={{
            position: 'absolute',
            height: '100%',
            right: 0,
            top: 0,
            backgroundSize: 'cover'
          }}
        />
        <img
          src={HorseImage}
          style={{
            position: 'absolute',
            height: '38%',
            right: '14%',
            bottom: '45%',
            transform: 'rotate(7deg)'
          }}
        />
        <Hidden mdDown>
          <Box
            sx={{
              position: 'absolute',
              bgcolor: 'background.default',
              height: '500px',
              top: height - 100,
              right: 0,
              left: 0,
              bottom: 0
            }}
          />
        </Hidden>
      </Box>
      <Container sx={{ height: '70vh', mt: 8, [theme.breakpoints.up('md')]: { mt: 6 } }}>
        <Stack sx={{ justifyContent: 'center', height: '100%' }}>
          <Typography sx={{ typography: { xs: 'h3', sm: 'h2', md: 'h1' }, letterSpacing: '0.02em', my: 1 }}>
            {title}
          </Typography>
          <Typography sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' }, letterSpacing: '0.05em', mb: 5 }}>
            {subtitle}
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: 'center', gap: 4 }}>
            <MainButton isFullWidth={isSmallScreen} sx={{ px: 3, height: 58 }} />
            <CustomButton isArrow={false} isFullWidth={isSmallScreen} sx={{ height: 58 }}>
              <img src='https://1inch.io/img/wallet/appstore2.svg' alt='appstore2' />
            </CustomButton>
            <CustomButton isArrow={false} isFullWidth={isSmallScreen} sx={{ height: 58 }}>
              <img src='https://1inch.io/img/wallet/googleplay3.svg' alt='googleplay3' />
            </CustomButton>
          </Stack>
        </Stack>
      </Container>
      <Container sx={{ mt: 3.5 }}>
        <Box
          sx={(theme) => ({
            bgcolor: 'background.default',
            overflow: 'hidden',
            position: 'relative',
            py: 5,
            [theme.breakpoints.up('sm')]: {
              ':before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                border: '2px solid transparent',
                borderRadius: '40px 40px 20px 20px',
                background: 'linear-gradient(180deg,grey,transparent) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }
            }
          })}
        >
          <Grid container spacing={3} justifyContent={'space-between'} alignItems={'center'}>
            {items.map((item, index) => (
              <Grid item key={index} xs={6} md={3}>
                <Stack spacing={{ xs: 1, md: 2 }} alignItems={'center'} justifyContent={'center'}>
                  <CountUp prefix={item.before} suffix={item.after} end={item.counter} decimals={Number(item.decimals)}>
                    {({ countUpRef }) => (
                      <Typography
                        sx={{
                          typography: {
                            xs: 'h4',
                            md: 'h2'
                          }
                        }}
                      >
                        <span ref={countUpRef} />
                      </Typography>
                    )}
                  </CountUp>
                  <Typography variant='body2' color='text.secondary'>
                    {item.subtitle}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Section1
