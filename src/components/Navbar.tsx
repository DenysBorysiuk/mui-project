import { Pets } from '@mui/icons-material';
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  border: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Lama dev
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>search</Search>
        <Icons>icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
