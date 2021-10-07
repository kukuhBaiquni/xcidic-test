/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import theme from '../../../theme'

export default function NewsSpotlight() {
  return (
    <Box css={css`
      max-width: 100%;
      position: relative;
      overflow: hidden;
    `}
    >
      <Image
        alt='Spotlight Image'
        css={css`
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        `}
        height={394}
        src='https://akcdn.detik.net.id/community/media/visual/2021/10/06/polisi-tangkap-pelaku-penggelapan-mobil-showroom-di-tangsel-2_169.jpeg?w=700&q=90'
        width={700}
      />
      <Box
        css={css`
          position: absolute;
          left: 15px;
          bottom: 20px;
        `}
      >
        <Typography
          css={css`
            font-weight: 700; 
            color: ${theme.palette.common.white};
            letter-spacing: 0.5px;
          `}
          variant='h5'
        >
          Polisi Gadungan Gelapkan 4 Mobil Showroom, Diciduk saat Naik Alphard!
        </Typography>
        <Typography
          css={css`
            font-size: 13px;
            color: ${theme.palette.common.white};
          `}
          variant='caption'
        >
          detikNews | 18 menit yang lalu
        </Typography>
      </Box>
    </Box>
  )
}
