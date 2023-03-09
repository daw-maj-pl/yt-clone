import { Stack, Box } from '@mui/material';

const Videos = ({ videos }) => {
  if (!videos?.length) return '<Loader />;';

  return (
    <Stack
      direction={'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && '<VideoCard />'}
          {item.id.channelId && '<ChannelCard />'}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
