/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Grid from '@mui/material/Grid'
import NewsSpotlight from './left/news-spotlight'

export default function Sections() {
  return (
    <Grid
      container
      css={css`
        max-width: 1060px;
        margin-left: auto;
        margin-right: auto;
      `}
      spacing={3}
    >
      <Grid
        css={css`
          background-color: lime;
        `}
        xs={8}
      >
        <NewsSpotlight />
      </Grid>
      <Grid
        css={css`
          background-color: orange;
        `}
        xs={4}
      >
        right
      </Grid>
    </Grid>
  )
}
