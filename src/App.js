import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<h1>VideoDetail</h1>} />
          <Route path="/channel/:id" element={<h1>ChannelDetail</h1>} />
          <Route path="/search/:searchTerm" element={<h1>SearchFeed</h1>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
