import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () => (
  <Box minHeight="95vh">
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <CircularProgress sx={{ color: '#fc1503' }} />
    </Stack>
  </Box>
);

export default Loader;
