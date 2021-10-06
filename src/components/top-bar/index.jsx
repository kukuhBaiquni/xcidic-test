/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ButtonMenu from 'components/button/button-menu'
import Box from '@mui/material/Box'
import SearchInput from 'components/search-input'
import RoundedButton from 'components/button/rounded-button'

export default function TopBar() {
  return (
    <header
      css={css`
        /* background-color: hotpink;  */
        width: '100%';
      `}
    >
      <Box
        css={css`
          height: 46px; 
          max-width: 1100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-grow: 1;
          margin: 0 auto;
        `}
      >
        <Box
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <ButtonMenu />
        </Box>
        <Box>
          <SearchInput />
        </Box>
        <Box>
          <RoundedButton title='Daftar detikID' />
          <RoundedButton title='Masuk' variant='outlined' />
        </Box>
      </Box>
    </header>
  )
}
