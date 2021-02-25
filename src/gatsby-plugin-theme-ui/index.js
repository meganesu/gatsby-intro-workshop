import nightOwl from '@theme-ui/prism/presets/night-owl'

const theme = {
  breakpoints: ['50em', '64em', '90em'],
  space: [4, 8, 16, 24, 32, 40, 48, 64, 96, 120],
  colors: {
    header: '#3E3944',
    text: '#3E3944',
    textMedium: '#6B5B84',
    primary: '#8A4BAF',
    background: '#FFFFFF',
    purple5: '#FCFAFF',
    purple10: '#F6EDFA',
    purple20: '#F1DEFA',
    purple30: '#D9BAE8',
    purple40: '#B17ACC',
    purple50: '#8954A8',
    purple60: '#663399',
    purple80: '#452475',
    grey10: '#F5F5F5',
    grey20: '#F0F0F2',
    grey30: '#D9D7E0',
    grey50: '#78757A',
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 40, 48],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  },
  lineHeights: ['1', '1.15', '1.35', '1.55', '1.65'],
  letterSpacings: ['-1px', '-0.5px', '-0.2px', '0.3px'],
  text: {
    body: {
      fontFamily: 'body',
      fontSize: [2, 3],
      fontWeight: 'regular',
      lineHeight: 3,
      letterSpacing: 2,
      marginBottom: 2
    },
    small: {
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: 'regular',
      lineHeight: 3,
      letterSpacing: 2,
      marginBottom: 2
    },
    h1: {
      fontFamily: 'body',
      fontSize: [6, 7, 8],
      fontWeight: 'extraBold',
      lineHeight: 1,
      letterSpacing: 0,
      color: 'text'
    },
    subhead: {
      fontFamily: 'body',
      fontSize: [3, 4, 5],
      fontWeight: 'medium',
      lineHeight: [2, 3],
      letterSpacing: 1,
      color: 'text'
    },
    h2: {
      fontFamily: 'body',
      fontSize: [4,5,6],
      fontWeight: 'extraBold',
      lineHeight: 2,
      letterSpacing: 1,   
      color: 'text'   
    },
    h3: {
      fontFamily: 'body',
      fontSize: [3,4],
      fontWeight: 'bold',
      lineHeight: 3,
      letterSpacing: 2,
      color: 'text'
    },
    h4: {
      fontFamily: 'body',
      fontSize: [2,3],
      fontWeight: 'bold',
      lineHeight: 3,
      letterSpacing: 1,
      color: 'text'
    }
  },
  styles: {
    root: {
      mt: [4,5,8],
      lineHeight: 3,
      color: (theme) => theme.colors.textMedium,
      fonts: '"system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    a: {
      color: 'purple60'
    },
    body: {
      lineHeight: 3
    },
    pre: {
      ...nightOwl,
      p: 3,
      borderRadius: '4px',
      hyphens: true,
      whiteSpace: 'pre-wrap',
      overflowX: 'auto',
    },
    inlineCode: {
      color: 'primary',
      bg: 'purple10',
      borderRadius: 3,
      px: '0.4rem',
      pt: '0.2rem',
      pb: '0.3rem',
      position: 'relative',
      top: '-1px'
    },
    li: {
      mb: [1,2]
    },
    h2: {
      fontFamily: 'body',
      fontSize: [4,5,6],
      fontWeight: 'extraBold',
      lineHeight: 2,
      letterSpacing: 1,   
      color: 'text',
      mt: [4, 7],
      mb: '0px'
    },
    h3: {
      fontFamily: 'body',
      fontSize: [3,4],
      fontWeight: 'bold',
      lineHeight: 3,
      letterSpacing: 2,
      color: 'text',
      mt: [2,3,4],
      mb: '0px'
    },
    h4: {
      fontFamily: 'body',
      fontSize: [2,3],
      fontWeight: 'bold',
      lineHeight: 3,
      letterSpacing: 1,
      color: 'text',
      mt: [1,2],
      mb: '0px'
    }
  }
};

export default theme;