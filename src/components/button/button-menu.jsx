/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import IconButton from '@mui/material/IconButton'
import { Fragment } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import theme from '../../theme'

export default function ButtonMenu() {
  return (
    <Fragment>
      <IconButton
        css={css`
          height: 26px;
          width: 26px;
          background-color: ${theme.palette.primary.main};
          color: white;
        `}
      >
        <MenuIcon color='inherit' fontSize='small' />
      </IconButton>
      <Typography
        css={css`
          font-weight: 700;
          line-height: 15px;
          margin-top: 5px;
          color: ${theme.palette.textGeneral.main};
          margin-left: 10px;
        `}
        variant='button'
      >
        menu
      </Typography>
    </Fragment>
  )
}
