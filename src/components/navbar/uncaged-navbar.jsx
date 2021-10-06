/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import Badge from '@mui/material/Badge'
import TvIcon from '@mui/icons-material/Tv'
import Link from 'next/link'
import theme from '../../theme'

export default function UncagedNavbar() {
  return (
    <nav
      css={css`
        max-width: 1100px;
        overflow-x: auto;
      `}
    >
      <ul css={css`
        list-style: none;
        padding: 3px 12px;
        margin: 0;
        display: flex;
        align-items: center;
        li {
          margin-right: 5px;
        }
      `}
      >
        {menuList.map((item) => (
          <li key={item.title}>
            <ButtonText {...item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ButtonText(props) {
  const {
    title, icon, color, hasBadge,
  } = props
  return (
    <Badge
      color='error'
      invisible={!hasBadge}
      variant='dot'
    >
      <Button
        css={css`
          padding: 0 7px;
        `}
        startIcon={icon}
        variant='text'
      >
        <Link href='/test/navigation-example'>
          <a css={css`text-decoration-line: none;`}>
            <Typography
              css={css`
              font-weight: 700;
              color: ${color};
              transition: 0.4s;
              text-transform: none;
              font-size: 14px;
            `}
              variant='body1'
            >
              {title}
            </Typography>
          </a>
        </Link>
      </Button>
    </Badge>
  )
}

const menuList = [
  {
    title: 'Live TV',
    icon: <TvIcon />,
    color: theme.palette.primary.main,
    hasBadge: true,
  },
  {
    title: 'Adsmart',
    icon: null,
    color: theme.palette.common.black,
    hasBadge: false,
  },
  {
    title: 'Foto',
    icon: null,
    color: theme.palette.common.black,
    hasBadge: false,
  },
  {
    title: 'detikX',
    icon: null,
    color: theme.palette.common.black,
    hasBadge: false,
  },
  {
    title: 'Sepakbola',
    icon: null,
    color: theme.palette.common.black,
    hasBadge: false,
  },
  {
    title: 'Pasangmata',
    icon: null,
    color: theme.palette.common.black,
    hasBadge: false,
  },
  {
    title: 'Hikmah',
    icon: null,
    color: theme.palette.common.black,
    hasBadge: false,
  },
  {
    title: 'Edukasi',
    icon: null,
    color: theme.palette.error.main,
    hasBadge: false,
  },
  {
    title: 'MotoGP 2021',
    icon: null,
    color: theme.palette.error.dark,
    hasBadge: true,
  },
  {
    title: 'Daftar Vaksin',
    icon: null,
    color: theme.palette.error.dark,
    hasBadge: true,
  },
]

ButtonText.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  hasBadge: PropTypes.bool,
}
