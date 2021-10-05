/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import OutlinedInput from '@mui/material/OutlinedInput'
import SearchIcon from '@mui/icons-material/Search'
import theme from '../../theme'

export default function SearchInput() {
  return (
    <OutlinedInput
      css={css`
        width: 380px;
        padding: 0 10px;
        display: flex;
        border-radius: 20px;
        .MuiOutlinedInput-input {
          border-color: lime;
          padding: 6px;
        }
      `}
      endAdornment={<SearchIcon css={css`color: ${theme.palette.textGeneral.main}`} />}
      placeholder='Cari Berita'
    />
  )
}
