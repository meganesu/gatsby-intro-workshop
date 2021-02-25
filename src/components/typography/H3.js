/** @jsx jsx */
import { jsx, Text } from 'theme-ui';

const H3 = ({children}) => (
  <Text variant="h3" as="h3" sx={{ mt: [2,3,4] }}>{children}</Text>
)

export default H3