import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LanguageIcon from '@mui/icons-material/Language'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Container, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navbarContent } from '~/utils/content'
import { MainButton, Navbar } from '.'

const Header = () => {
  const titleArray = [
    { title: 'Products' },
    { title: 'Developers' },
    { title: 'Governance' },
    { title: 'About' },
    { title: 'Blog' }
  ]
  const { Logo } = navbarContent
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: 72,
        bgcolor: scrollPosition > 10 ? 'rgba(7,7,16,.7)' : 'transparent',
        backdropFilter: scrollPosition > 10 ? 'blur(60px)' : 'none'
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up('lg')]: {
            maxWidth: '1380px!important'
          }
        }}
      >
        <Stack
          sx={{ mx: !isMobile ? 0 : -2 }}
          direction={'row'}
          justifyContent={'space-between'}
          alignContent={'center'}
          flexWrap={'wrap'}
        >
          <Link to={'/'}>
            <img src={Logo} alt='1inch' style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Link>
          {isMobile ? (
            <IconButton>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  flexWrap={'wrap'}
                  spacing={6}
                  sx={{ flex: 1 }}
                >
                  {titleArray.map((item, index) => (
                    <Navbar key={index}>
                      <Typography variant='body2'>{item.title}</Typography>
                      {index !== titleArray.length - 1 ? (
                        <KeyboardArrowDownIcon fontSize='small' />
                      ) : (
                        <ArrowOutwardIcon sx={{ fontSize: 12 }} />
                      )}
                    </Navbar>
                  ))}
                </Stack>
              </nav>
              <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} spacing={5}>
                <Stack
                  sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    ':hover': {
                      color: 'text.primary'
                    }
                  }}
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  flexWrap={'wrap'}
                  spacing={1}
                >
                  <LanguageIcon fontSize='small' />
                  <Typography variant='body2' sx={{ lineHeight: 1 }}>
                    EN
                  </Typography>
                </Stack>
                <MainButton sx={{ borderRadius: 3, pr: 1 }} />
              </Stack>
            </>
          )}
        </Stack>
      </Container>
    </AppBar>
  )
}

export default Header
