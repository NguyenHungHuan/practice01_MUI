import { Box, Container, Grid, Stack, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import { section2Content } from '~/utils/content'
import { CustomButton } from '.'

const Section2 = () => {
  const { ITEMS, title, bottom, top, BannerBgImage, BannerBgImageMobile, subtitle, title2 } = section2Content
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [value, setValue] = useState<number>(0)

  return (
    <Container sx={{ pt: { xs: 10, md: 20 } }}>
      <Container maxWidth='md'>
        <Typography
          sx={{
            color: 'text.primary',
            textAlign: 'center',
            typography: {
              xs: 'h3',
              md: 'h2'
            }
          }}
        >
          {title}
        </Typography>
      </Container>
      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent={'center'}>
        {ITEMS.map((item, index) => (
          <Grid item key={index} xs={4} md={3} lg={2}>
            <Stack alignItems={'center'}>
              <img src={item.logo} alt={item.name} style={{ height: '120px', objectFit: 'contain' }} />
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                {item.name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        sx={{ pt: { xs: 15, md: 20, lg: 25 } }}
        flexWrap={'wrap-reverse'}
        alignItems={'center'}
        spacing={10}
      >
        <Grid item xs={12} md={6}>
          <Stack spacing={2} alignItems={'start'} sx={{ maxWidth: 400 }}>
            <Typography
              sx={{
                color: 'text.primary',
                typography: {
                  xs: 'h3',
                  md: 'h2'
                }
              }}
            >
              {top.title}
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary', pb: 2 }}>
              {top.subtitle}
            </Typography>
            <CustomButton
              isFullWidth={isSmallScreen}
              sx={{ borderColor: 'text.secondary', pl: 3, pr: 1.5, py: 1, borderRadius: 3 }}
            >
              Swap
            </CustomButton>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={top.image} alt={top.title} style={{ width: '100%', objectFit: 'contain' }} />
        </Grid>
      </Grid>

      <Grid container sx={{ pt: { xs: 15, md: 20, lg: 25 } }} alignItems={'center'} spacing={{ lg: 15, md: 10, xs: 1 }}>
        <Grid item xs={12} md={6}>
          <img
            src={bottom.TABS[value].image}
            alt={bottom.TABS[value].name}
            style={{ width: '100%', objectFit: 'contain' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 450 }}>
            <Typography
              sx={{
                color: 'text.primary',
                typography: {
                  xs: 'h3',
                  md: 'h2'
                }
              }}
            >
              {bottom.title}
            </Typography>
            <Tabs
              value={value}
              onChange={(_, value) => setValue(value as number)}
              variant='scrollable'
              scrollButtons={false}
            >
              {bottom.TABS.map((item) => (
                <Tab
                  key={item.name}
                  label={item.name}
                  sx={{
                    '&.Mui-selected': {
                      color: '#fff'
                    }
                  }}
                />
              ))}
            </Tabs>
            <Typography variant='body2' sx={{ color: 'text.secondary', pb: 2, height: 70 }}>
              {bottom.TABS[value].subtitle}
            </Typography>
            <CustomButton
              fit={!isSmallScreen}
              isFullWidth={isSmallScreen}
              sx={{ borderColor: 'text.secondary', pl: 3, pr: 1.5, py: 1, borderRadius: 3 }}
            >
              Learn more
            </CustomButton>
          </Stack>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: {
            xs: 10,
            md: 20,
            lg: 25
          },
          position: 'relative',
          background: `url(${BannerBgImageMobile})`,
          backgroundSize: 'cover',
          py: 5,
          borderRadius: '30px',
          [theme.breakpoints.up('sm')]: {
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
          },
          [theme.breakpoints.up('md')]: {
            background: `url(${BannerBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right'
          }
        }}
      >
        <Grid container sx={{ px: { xs: 5, md: 8 } }} flexWrap={'wrap-reverse'}>
          <Grid item xs={12} md={5} lg={4}>
            <Stack spacing={2} justifyContent={'center'} sx={{ height: '100%' }}>
              <Typography
                sx={{
                  color: 'text.primary',
                  typography: {
                    xs: 'h3',
                    md: 'h2'
                  }
                }}
              >
                {title2}
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', pb: 2, maxWidth: 300 }}>
                {subtitle}
              </Typography>
              <CustomButton
                fit={!isSmallScreen}
                isFullWidth={isSmallScreen}
                sx={{
                  borderColor: 'text.secondary',
                  pl: 3,
                  pr: 1.5,
                  py: 1,
                  borderRadius: 3,
                  background:
                    'radial-gradient(63.89% 180.95% at 15.94% 154.76%, #16979F 0%, rgba(22, 151, 159, 0) 100%)'
                }}
              >
                Learn more
              </CustomButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <Box sx={{ height: 320 }} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Section2
