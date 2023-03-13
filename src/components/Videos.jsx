import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

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
      {videos.map(
        (item, idx) =>
          (item?.id?.videoId || item?.id?.channelId) && (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          )
      )}
    </Stack>
  );
};

export default Videos;
