import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ElaineAvatar from '../images/Elaine.png'
import JoeZAvatar from '../images/JoeZ.png'
import JoeSAvatar from '../images/JoeS.png'
import ChloeAvatar from '../images/Chloe.png'
import JackAvatar from '../images/Jack.png'
import LinyiAvatar from '../images/Linyi.png'
import TJinAvatar from '../images/TJin.png'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import './seasonRanking.css'


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SeasonRanking() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
        variant="scrollable" scrollButtons="auto">
          <Tab label="2023 Dec" {...a11yProps(0)} />
          <Tab label="2024 Jan" {...a11yProps(1)} />
          <Tab label="2024 Feb" {...a11yProps(2)} />
          <Tab label="2024 Mar" {...a11yProps(3)} />
          <Tab label="2024 Apr" {...a11yProps(4)} />
          <Tab label="2024 May" {...a11yProps(5)} />
          <Tab label="2024 Jun" {...a11yProps(6)} />
          <Tab label="2024 Jul" {...a11yProps(7)} />
          <Tab label="2024 Aug" {...a11yProps(8)} />
          <Tab label="2024 Sept" {...a11yProps(9)} />
          <Tab label="2024 Oct" {...a11yProps(10)} />
          <Tab label="2024 Nov" {...a11yProps(11)} />
          <Tab label="2024 Dec" {...a11yProps(12)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='AvatarGroup'>
            <div>
							<Avatar alt="Joe Sun" src={JoeSAvatar} sx={{ width: 55, height: 55 }} /> 
						</div>
            <div>
							<Avatar alt="Chloe" src={ChloeAvatar} sx={{ width: 55, height: 55 }} /> 
						</div>		     	
						<div>
							<Avatar alt="TJin" src={TJinAvatar} sx={{ width: 55, height: 55 }} /> 
						</div>
            <div id='JoeZ'>						
							<Avatar alt="Joe Zhou" src={JoeZAvatar} sx={{ width: 55, height: 55 }}/> 				
						</div>
            <div id="Elaine">
							<Avatar alt="Elaine" src={ElaineAvatar} sx={{ width: 55, height: 55 }} /> 
						</div>	
            <div id="linyi">
							<Avatar alt="Linyi" src={LinyiAvatar} sx={{ width: 55, height: 55 }} /> 
						</div>
						<div id="Jack">
							<Avatar alt="Jack" src={JackAvatar} sx={{ width: 55, height: 55 }} /> 
						</div>			
					</div>
          <div className='questionIcon'>
            <div><ArrowDownwardIcon sx={{ fontSize: 55 }} /></div>
            <div><HelpOutlineOutlinedIcon sx={{ fontSize: 55 }}/></div>
          </div>
          <div className="words">
            <p>
              Who will be evolved? Comming soon.....
            </p>
          </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={10}>
        Coming soon ...
      </CustomTabPanel>
    </Box>
  );
}