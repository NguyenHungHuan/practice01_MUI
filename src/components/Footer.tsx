import { Box, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import { footerContent } from '~/utils/content'
import { CustomButton } from '.'

const Footer = () => {
  const { copyright, developers, governance, protocols, socials, subscribe, support } = footerContent

  const LinkSection = ({ title, links }: { title?: string; links: Array<{ title: string }> }) => (
    <Stack spacing={2.5}>
      <Typography>{title}</Typography>
      {links.map((item) => (
        <Typography
          key={item.title}
          variant='body2'
          color='text.secondary'
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: 'text.primary'
            }
          }}
        >
          {item.title}
        </Typography>
      ))}
    </Stack>
  )

  return (
    <footer>
      <Box sx={{ pt: '188px', bgcolor: 'background.default' }}>
        <Divider sx={{ mb: 10 }} />
        <Container>
          <Grid container spacing={8} flexWrap='wrap-reverse'>
            <Grid item xs={12} md={6} lg={7} xl={8}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3} md={6} lg={3}>
                  <LinkSection {...protocols} />
                </Grid>
                <Grid item xs={6} sm={3} md={6} lg={3}>
                  <LinkSection {...governance} />
                </Grid>
                <Grid item xs={6} sm={3} md={6} lg={3}>
                  <LinkSection {...support} />
                </Grid>
                <Grid item xs={6} sm={3} md={6} lg={3}>
                  <LinkSection {...developers} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={5} xl={4}>
              <Stack>
                <Typography sx={{ mb: 1 }}>{subscribe.title}</Typography>
                <Typography variant='body2' color='text.secondary'>
                  {subscribe.subtitle}
                </Typography>
                <CustomButton
                  sx={{
                    borderColor: 'text.secondary',
                    my: 4,
                    pl: 3,
                    pr: 1.5,
                    py: 1,
                    borderRadius: 3
                  }}
                >
                  Subscribe
                </CustomButton>
                <Stack direction='row' spacing={1} alignItems='center' justifyContent='space-between' flexWrap='wrap'>
                  {socials.map((item, i) => (
                    <IconButton key={i}>
                      <item.icon />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 6, mb: 5 }} />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent='space-between'
            alignItems='center'
            spacing={1}
            sx={{ pb: 6 }}
          >
            <Typography variant='body2' color='text.secondary'>
              {copyright.left}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {copyright.center}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              BUIDL @nhhuaan 2023
            </Typography>
          </Stack>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
