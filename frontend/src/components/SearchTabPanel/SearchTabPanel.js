import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { Popover, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${alpha(theme.palette.common.black, 0.15)}`,
  backgroundColor: theme.palette.common.white,
  width: '100%',
  marginTop: theme.spacing(3),
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  padding: theme.spacing(1.5),
  borderRight: `1px solid ${alpha(theme.palette.common.black, 0.15)}`,
  flex: 1,
  fontSize: '1rem',
  '@media (max-width: 768px)': {
    borderRight: 'none',
    borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.15)}`,
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: 'white',
  height: '100%',
  '&:hover': {
    backgroundColor: theme.palette.success.dark,
  },
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  flex: '0 0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1.5),
  fontSize: '1rem',
  fontWeight: 'bold',
  '@media (max-width: 768px)': {
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: 0,
  },
}));

const CenteredContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: theme.spacing(2),
}));

const SearchPanelWrapper = styled(Box)(({ theme }) => ({
  width: '60%',
  '@media (max-width: 768px)': {
    width: '90%',
  },
}));

const PopoverContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  minWidth: '200px',
}));

const GuestControl = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.15)}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const SearchTabPanel = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState(null);
  const [destination, setDestination] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleOpenPopover = (event, content) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(content);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setPopoverContent(null);
  };

  const open = Boolean(anchorEl);

  return (
    <CenteredContainer>
      <SearchPanelWrapper>
        <SearchContainer>
          <StyledInputBase
            placeholder="Où ?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onFocus={(e) => handleOpenPopover(e, 'destinations')}
          />
          <StyledInputBase
            placeholder="Quand ?"
            onFocus={(e) => handleOpenPopover(e, 'calendar')}
          />
          <StyledInputBase
            placeholder="Qui ?"
            onFocus={(e) => handleOpenPopover(e, 'guests')}
          />
          <SearchButton variant="contained">
            <SearchIcon />
            Chercher
          </SearchButton>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {popoverContent === 'destinations' && (
              <PopoverContent>
                <Typography variant="h6">
                  Rechercher des destinations...
                </Typography>
              </PopoverContent>
            )}
            {popoverContent === 'calendar' && (
              <PopoverContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateRangeCalendar />
                </LocalizationProvider>
              </PopoverContent>
            )}
            {popoverContent === 'guests' && (
              <PopoverContent>
                <GuestControl>
                  <Typography>Adulte</Typography>
                  <Box>
                    <IconButton
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography component="span" mx={2}>
                      {adults}
                    </Typography>
                    <IconButton onClick={() => setAdults(adults + 1)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </GuestControl>
                <GuestControl>
                  <Typography>Enfants</Typography>
                  <Box>
                    <IconButton
                      onClick={() => setChildren(Math.max(0, children - 1))}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography component="span" mx={2}>
                      {children}
                    </Typography>
                    <IconButton onClick={() => setChildren(children + 1)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </GuestControl>
                <GuestControl>
                  <Typography>Bébés</Typography>
                  <Box>
                    <IconButton
                      onClick={() => setInfants(Math.max(0, infants - 1))}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography component="span" mx={2}>
                      {infants}
                    </Typography>
                    <IconButton onClick={() => setInfants(infants + 1)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </GuestControl>
              </PopoverContent>
            )}
          </Popover>
        </SearchContainer>
      </SearchPanelWrapper>
    </CenteredContainer>
  );
};

export default SearchTabPanel;
