/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import theme from '../../../theme'

export default function NewsSpotlight() {
  return (
    <Box css={css`
      max-width: 100%;
    `}
    >
      <Image
        alt='Spotlight Image'
        css={css`
          object-fit: cover;
        `}
        height={394}
        src='https://akcdn.detik.net.id/community/media/visual/2021/10/06/polisi-tangkap-pelaku-penggelapan-mobil-showroom-di-tangsel-2_169.jpeg?w=700&q=90'
        width={700}
      />
    </Box>
  )
}
