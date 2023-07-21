import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { section3Content } from '~/utils/content'
import { Card, CustomButton } from '.'

const Section3 = () => {
  const { ITEMS1, ITEMS2, ShieldImage, caption3, subtitle2, subtitle3, title1, title2, title3 } = section3Content
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Container sx={{ pt: { xs: 10, md: 20 } }}>
      <Typography sx={{ color: 'text.primary', typography: { xs: 'h3', md: 'h2' }, mb: 8 }}>{title1}</Typography>
      <Grid container spacing={3}>
        {ITEMS1.map(
          (item, index) =>
            index !== 3 && (
              <Grid item key={item.title} xs={12} md={6}>
                <Card {...item} />
              </Grid>
            )
        )}
      </Grid>

      <Box sx={{ pt: { xs: 10, md: 20 } }}>
        <Typography sx={{ color: 'text.primary', typography: { xs: 'h3', md: 'h2' }, mb: 2 }}>{title2}</Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary', mb: 8 }}>
          {subtitle2}
        </Typography>
        <Grid container spacing={3}>
          {ITEMS2.map((item) => (
            <Grid item key={item.title} xs={12} md={6}>
              <Card {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Stack sx={{ pt: { xs: 10, md: 20 } }} justifyContent={'center'} alignItems={'center'}>
        <Typography sx={{ color: 'text.primary', typography: { xs: 'h3', md: 'h2' }, mb: 2 }}>{title3}</Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary', mb: 6, textAlign: 'center' }}>
          {subtitle3}
        </Typography>
        <Box sx={{ px: { xs: 5, md: 10, lg: 15 } }}>
          <img src={ShieldImage} alt={subtitle3} style={{ width: '100%', objectFit: 'contain' }} />
        </Box>
        <Typography variant='body2' sx={{ color: 'text.secondary', mb: 1, mt: 5, textAlign: 'center' }}>
          {caption3}
        </Typography>
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
    </Container>
  )
}

export default Section3
