/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import theme from '../../theme'

export default function NewsAfterNavbar() {
  return (
    <Grid
      columns={15}
      container
      spacing={2}
      sx={{ mt: 1 }}
    >
      {newsList.map((item) => (
        <Grid item key={item.title} xs={3}>
          <Card css={css`box-shadow: none;`}>
            <CardMedia
              alt='News Image'
              component='img'
              css={css`
                &:hover {
                  transform: scale(1.1);
                  transition: 0.4s;
                }
              `}
              height='140'
              image={item.coverImageUrl}
            />
            <Typography
              color='black'
              css={css`
                position: relative;
                padding: 10px 0;
                background-color: ${theme.palette.common.white};
                z-index: 100;
                top: -40px;
                font-weight: 700;
                margin-top: 10px;
                letter-spacing: 1px;
              `}
              variant='body2'
            >
              {item.title}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

const newsList = [
  {
    title: 'Tempat Ini Disebut Neraka Dunia Rusia, Jutaan Orang Tewas di Penjara',
    coverImageUrl: 'https://akcdn.detik.net.id/community/media/visual/2016/09/26/98525e50-12bf-4cc6-954c-2ac09c14cfdd_43.jpg?w=700&q=90',
  },
  {
    title: 'Ada Apa dengan Rumah Tangga Shandy Aulia dengan Suami?',
    coverImageUrl: 'https://akcdn.detik.net.id/community/media/visual/2021/08/30/pola-makan-shandy-aulia-2_43.jpeg?w=700&q=90',
  },
  {
    title: 'Project Director Jakpro yang urus Formula E Mengundurkan Diri',
    coverImageUrl: 'https://akcdn.detik.net.id/community/media/visual/2020/02/12/63e5e492-afda-4afe-9464-abf0027fd768_169.png?w=700&q=90',
  },
  {
    title: 'Dinkes DKI Telusuri Viral Bidan Lecehkan Bumil di Puskesmas Jakbar',
    coverImageUrl: 'https://akcdn.detik.net.id/community/media/visual/2020/01/11/a6649535-969f-4e55-8ea6-2b3db6a5dd69_169.jpeg?w=700&q=90',
  },
  {
    title: 'Bapak Infrastruktur RI: Pernah Distempelkan ke Basuki, Kini Disematkan ke Jokowi',
    coverImageUrl: 'https://akcdn.detik.net.id/community/media/visual/2018/11/17/ab4a4335-7dfd-4b1a-8ad6-ca946ae8624c_169.jpeg?w=700&q=90',
  },
]
