import * as React from 'react';
import Stack from '@mui/material/Stack';
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
import golduckGif from '../images/golduck.gif'
import sylveon from '../images/sylveon.gif'
import ElaineAvatar1 from '../images/Elaine.gif'
import JoeZAvatar1 from '../images/JoeZ.gif'
import JoeSAvatar1 from '../images/JoeS.gif'
import ChloeAvatar1 from '../images/Chloe.gif'
import JackAvatar1 from '../images/Jack.gif'
import LinyiAvatar1 from '../images/Linyi.gif'
import TJinAvatar1 from '../images/TJin.gif'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Podium from '../images/podium.png';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { TypeAnimation } from 'react-type-animation';
import season2_rank1 from '../images/Season2/JoeSun_season2.gif';
import season2_rank2 from '../images/Season2/JoeZhou_season2.gif';
import season2_rank3 from '../images/Season2/Chloe_season2.gif'
//Season 3
import ElaineAvatar3 from '../images/Season3/ElaineEvolved.gif'
import JoeZAvatar3 from '../images/Season3/JoeZ2.gif'
import JoeSAvatar3 from '../images/Season3/JoeSEvolved.gif'
import ChloeAvatar3 from '../images/Season3/chloeEvolved.gif'
import JackAvatar3 from '../images/Season3/JackEvolved.gif'
import LinyiAvatar3 from '../images/Season3/LinyiEvolved.gif'
import TJinAvatar3 from '../images/Season3/TJinEvolved.gif'

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
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
        variant="scrollable" scrollButtons="auto">
          <Tab label="2023 Dec" {...a11yProps(0)} />
          <Tab label="2024 Jan-Feb" {...a11yProps(1)} />
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
          <div className='SeasonTitle'>
            Season 1 Final Ranking
          </div>
        <div className='AvatarGroup'>
            <div id='JoeS'>
							<Avatar alt="Joe Sun" src={JoeSAvatar} sx={{ width: 55, height: 55 }} /> 
						</div>
            <div id='Chole'>
							<Avatar alt="Chloe" src={ChloeAvatar} sx={{ width: 55, height: 55 }} /> 
						</div>		     	
						<div id='TJin'>
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
          </div>
          <div className="words">
            <TypeAnimation
                sequence={[
                  'After one month of hard battles, Eevee and psyduck have both evolved!!!',
                  () => {
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                style={{ display: 'inline-block' }}
				    />
          </div>
          <div className="evolution">
            <div id='sylveon'>
              <img src={sylveon} alt="Eevee has evolved!" loading="lazy" />
            </div>
            <div id='golduck'>
              <img src={golduckGif} alt="Psyduck has evolved!" loading="lazy" />
            </div>
          </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
          <div className='SeasonTitle'>
            Season 2 Final Ranking
          </div>
          <div className='AvatarGroup'>
            <div id='JoeS'>
							<Avatar alt="Joe Sun" variant="square" src={JoeSAvatar1} sx={{ width: 55, height: 55 }} /> 
              <div> No1.75</div>
						</div>
            <div id='JoeZ'>						
							<Avatar alt="Joe Zhou" variant="square" src={JoeZAvatar1} sx={{ width: 55, height: 55 }}/> 
              <div> No2.60</div>				
						</div>
            <div id='Chole'>
							<Avatar alt="Chloe" variant="square" src={ChloeAvatar1} sx={{ width: 55, height: 55 }} /> 
              <div>No3.55</div>
						</div>		     	
						<div id='TJin'>
							<Avatar alt="TJin" variant="square" src={TJinAvatar1} sx={{ width: 55, height: 55 }} /> 
              <div>No4.50</div>
						</div>
            <div id="Jack">
							<Avatar alt="Jack" variant="square" src={JackAvatar1} sx={{ width: 55, height: 55 }} />
              <div>No5.45</div>
						</div>
            <div id="Elaine">
							<Avatar alt="Elaine" variant="square" src={ElaineAvatar1} sx={{ width: 55, height: 55 }} />
              <div>No6.30</div> 
						</div>	
            <div id="linyi">
							<Avatar alt="Linyi" variant="square" src={LinyiAvatar1} sx={{ width: 55, height: 55 }} /> 
              <div>No7.20</div>
						</div>			
					</div>
          <div className="words">
            <TypeAnimation
                sequence={[
                  'As season 2 drew to a close, Dratini, Meowth and Alolan Vulpix secured the top 3 spots and each has undergone remarkable evolution! However, heart sank for Abra, who narrowly missed the mark, landing at No.4 and failing to evolve. On a brighter note, Squirtle showcased remarkable growth, mastering a special ability to catch 三连拖 and soaring to No.5. Meanwhile, Togepi and Jigglypuff, beloved for their adorable charm, found themselves preoccupied with exploration, study and work, resulting in a lack of sleep and lower rankings, they promised to bounce back stronger in next season!!!',
                  () => {
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                speed={80}
                style={{ display: 'inline-block' }}
				    />
          </div>
          {/* <div className='questionIcon'>
            <div><ArrowDownwardIcon sx={{ fontSize: 30 }} /></div>
          </div> */}
          <div className='Season2Ranking'>
            <div id='season2Rank2'>
              <img src={season2_rank2} alt="Rank2" loading="lazy" />
            </div>
            <div id='season2Rank1'>
              <img src={season2_rank1} alt="Rank1" loading="lazy" />
            </div>
            <div id='season2Rank3'>
              <img src={season2_rank3} alt="Rank3" loading="lazy" />
            </div>
          </div>

          <div className="Podium">
            <div id='Podium'>
              <img src={Podium} alt="Podium" loading="lazy" />
            </div>
          </div>
          
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
          <div className='SeasonTitle'>
            Season 3 Final Ranking
          </div>
          <div className="words">
            <TypeAnimation
                sequence={[
                  'Season 3 passed fast and came to an end, Grimer used evil posion (贴牌) and landed on No.1 whereas all other pokemons fought hard and landed on No.2. All pokemons have evolved, what a surprise!!!',
                  () => {
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                speed={80}
                style={{ display: 'inline-block' }}
				    />
          </div>

          <div className='AvatarGroupColumn'>
            <div className="avatar1">
              <Stack direction="Column" spacing={10}>
              <div id='JoeZ'>						
                  <Avatar alt="Joe Zhou" src={JoeZAvatar3} variant="square" sx={{ width: 130, height: 70 }} /> Joe Zhou No.1 30					
                </div>	
                <div id="linyi">
                  <Avatar alt="Linyi" src={LinyiAvatar3} variant="square" sx={{ width: 80, height: 80 }} /> Linyi No.2 20
                </div>
                <div id="Jack">
                  <Avatar alt="Jack" src={JackAvatar3} variant="square" sx={{ width: 80, height: 80 }}  /> Jack No2. 20
                </div>
                <div id="Elaine">
                  <Avatar alt="Elaine" src={ElaineAvatar3} variant="square" sx={{ width: 120, height: 80 }} /> Elaine No2. 20
                </div>					
              </Stack>
              
            </div>
            <br/>

            <div className="avatar2">
              <Stack direction="Column" spacing={10}>
                <div>
                  <Avatar alt="Chloe" src={ChloeAvatar3} variant="square" sx={{ width: 80, height: 90 }} /> Chloe No2. 20
                </div>		
                <div>
                  <Avatar alt="TJin" src={TJinAvatar3} variant="square" sx={{ width: 90, height: 80 }} /> TJin No2. 20
                </div>
                <div>
                  <Avatar alt="Joe Sun" src={JoeSAvatar3} variant="square" sx={{ width: 90, height: 80 }} /> Joe Sun No2. 20
                </div>			
              </Stack>
            </div>
					</div>
        
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