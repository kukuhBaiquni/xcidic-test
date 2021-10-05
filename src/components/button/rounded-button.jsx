/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import Typography from '@mui/material/Typography'
import theme from '../../theme'

export default function RoundedButton({ variant, title }) {
  return (
    <Fragment>
      <Button
        css={css`
          border-radius: 30px;
          padding: 2px 16px;
          margin: 0 3px;
        `}
        variant={variant || 'contained'}
      >
        <Typography
          css={css`
          font-weight: 700;
          margin-top: 3px;
          font-size: 14px;
          color: ${variant ? theme.palette.primary.main : 'white'};
          text-transform: none;
        `}
          variant='button'
        >
          {title}
        </Typography>
      </Button>
    </Fragment>
  )
}

RoundedButton.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
}
