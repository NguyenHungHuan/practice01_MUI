import { Section1, Section2, Section3, Section4 } from '~/components'
import Box from '@mui/material/Box/Box'

const Home = () => {
  return (
    <div>
      <Section1 />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Section2 />
        <Section3 />
        <Section4 />
      </Box>
    </div>
  )
}

export default Home
