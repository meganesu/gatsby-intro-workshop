/** @jsx jsx */
import { jsx, Text } from 'theme-ui';

const H4 = ({children}) => (
  <Text variant="h4" as="h4" sx={{ mt: [1,2] }}>{children}</Text>
)

export default H4