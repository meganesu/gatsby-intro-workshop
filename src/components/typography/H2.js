/** @jsx jsx */
import { jsx, Text } from 'theme-ui';

const H2 = ({children}) => (
  <Text variant="h2" as="h2" sx={{ mt: [4, 7] }}>{children}</Text>
)

export default H2