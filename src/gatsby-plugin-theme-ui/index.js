const theme = {
  breakpoints: ['50em', '64em', '90em'],
  space: [4, 8, 16, 24, 32, 40, 48, 64, 96, 120],
  colors: {
    text: '#1c1e21',
    primary: '#8A4BAF',
    background: '#fff',
    heading: '#FFFFFF',
    purple5: '#FCFAFF',
    purple10: '#F6EDFA',
    purple20: '#B9B9C6',
    purple30: '#9897AA',
    purple40: '#575A6B',
    purple50: '#40424F',
    purple60: '#32343E',
    purple70: '#21212C',
    purple80: '#1C1C22',
    purple90: '#121216',
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
    },
    subhead: {
      fontFamily: 'body',
      fontSize: [3, 4],
      fontWeight: 'medium',
      lineHeight: [2, 3],
      letterSpacing: 1
    },
    h2: {
      fontFamily: 'body',
      fontSize: [5, 6, 7],
      fontWeight: 'black',
      lineHeight: 2,
      letterSpacing: 1,
      color: 'heading'
    },
    h3: {
      fontFamily: 'body',
      fontSize: [4, 5],
      fontWeight: 'extraBold',
      lineHeight: 3,
      letterSpacing: 2,
      color: 'heading'
    },
    h4: {
      fontFamily: 'body',
      fontSize: 4,
      fontWeight: 'extraBold',
      lineHeight: 3,
      letterSpacing: 2,
      color: 'heading'
    }
  },
  styles: {
    root: {
      mt: [4,5,8],
      mx: ['2rem', 'auto'],
      maxWidth: ['100%', '48rem', '60rem', '86rem'],
      lineHeight: 3,
      color: (theme) => theme.colors.text,
      fonts: '"system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    a: {
      color: 'teal40'
    },
    body: {
      lineHeight: 3
    }
  }
};

export default theme;