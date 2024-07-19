import React, { Component} from "react";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ElaineAvatar from '../images/Elaine.gif'
import JoeZAvatar from '../images/JoeZ.gif'
import JoeSAvatar from '../images/JoeS.gif'
import ChloeAvatar from '../images/Season4/Chloe.gif'
import JackAvatar from '../images/Jack.gif'
import LinyiAvatar from '../images/Linyi.gif'
import TJinAvatar from '../images/Season4/TJin.gif'
import questionAvatar from '../images/unknownPokemon.png'
import { TypeAnimation } from 'react-type-animation';
import './home.css'

const Home = () => {
	const [comments, setComments] = React.useState(null)
	
	 const sayHello = (personName) => {
		switch (personName){
			case 'Linyi':
				setComments("本周五我要逃离被吃分的命运 ￣へ￣")
				//setComments("Total: 22")
				break;
			case 'Jack':
				setComments("我是rich boy 三连拖小王子")
				break;
			case 'TJin':
				setComments("好好好")
				break;
			case 'Joe Zhou':
				setComments("我要贴牌啦 (¬◡¬)")
				break;
			case 'Elaine':
				setComments("清醒一点 (ಥ﹏ಥ)")
				break;
			case 'Joe Sun':
				setComments("浅亮一下")
				break;
			case 'Chloe':
				setComments("我的牌「一般」")
				break;
			default:
				setComments(null)
				break;
		}
	  };

		return (		
			<div className="body">
				
				<div className="intro">
					<h1>Players</h1>
				</div>

				{/* <div className="welcomeMsg">
					<TypeAnimation
						sequence={[
							'Welcome to our Level Up world!!!',
							() => {
							console.log('Sequence completed');
							},
						]}
						wrapper="span"
						cursor={true}
						repeat={0}
						style={{ display: 'inline-block' }}
					/>
				</div> */}

				<div className="personalMsg">
					<p>{ comments }</p>
				</div>

				<div className="playerContainer">
					<div className="players" >
						{/* <div className="avatar1">
							<Stack direction="Column" spacing={10}>
								<div class='avatarContainer'>
									<div id="linyi" class='avatarIcon'>
										<Avatar alt="Linyi" src={LinyiAvatar} variant="square" sx={{ width: 50, height: 50 }} onClick={() => {sayHello('Linyi');} } 
										onMouseEnter={() => sayHello('Linyi')} onMouseLeave={() => sayHello()} /> 
									</div>
									<div class='avatarStatus'>Linyi</div>
								</div>
								<div class='avatarContainer'>
									<div id="Jack" class="avatarIcon">
										<Avatar alt="Jack" src={JackAvatar} variant="square" sx={{ width: 50, height: 50 }}  onClick={() => {sayHello('Jack');}} 
										onMouseEnter={() => sayHello('Jack')} onMouseLeave={() => sayHello()}/> 
									</div>
									<div class='avatarStatus'>Jack</div>
								</div>
								<div class='avatarContainer'>
									<div id="Elaine" class="avatarIcon">
										<Avatar alt="Elaine" src={ElaineAvatar} variant="square" sx={{ width: 50, height: 50 }} onClick={() => {sayHello('Elaine');}}
										onMouseEnter={() => sayHello('Elaine')} onMouseLeave={() => sayHello()}/> 
									</div>
									<div class='avatarStatus'>Elaine</div>
								</div>
								<div class='avatarContainer'>
									<div id='JoeZ' class="avatarIcon">						
										<Avatar alt="Joe Zhou" src={JoeZAvatar} variant="square" sx={{ width: 50, height: 55 }} onClick={() => {sayHello('Joe Zhou');}}
										onMouseEnter={() => sayHello('Joe Zhou')} onMouseLeave={() => sayHello()}/> 					
									</div>
									<div class='avatarStatus'>Joe Zhou</div>
								</div>						
							</Stack>
							
						</div>
						<br/> */}

						<div className="avatar2">
							<Stack direction="Column" spacing={10}>
							<div class='avatarContainer'>
									<div id="linyi" class='avatarIcon'>
										<Avatar alt="Linyi" src={LinyiAvatar} variant="square" sx={{ width: 50, height: 50 }} onClick={() => {sayHello('Linyi');} } 
										onMouseEnter={() => sayHello('Linyi')} onMouseLeave={() => sayHello()} /> 
									</div>
									<div class='avatarStatus'>Linyi</div>
								</div>
								<div class='avatarContainer'>
									<div id="Jack" class="avatarIcon">
										<Avatar alt="Jack" src={JackAvatar} variant="square" sx={{ width: 50, height: 50 }}  onClick={() => {sayHello('Jack');}} 
										onMouseEnter={() => sayHello('Jack')} onMouseLeave={() => sayHello()}/> 
									</div>
									<div class='avatarStatus'>Jack</div>
								</div>
								<div class='avatarContainer'>
									<div id="Elaine" class="avatarIcon">
										<Avatar alt="Elaine" src={ElaineAvatar} variant="square" sx={{ width: 50, height: 50 }} onClick={() => {sayHello('Elaine');}}
										onMouseEnter={() => sayHello('Elaine')} onMouseLeave={() => sayHello()}/> 
									</div>
									<div class='avatarStatus'>Elaine</div>
								</div>
								<div class='avatarContainer'>
									<div id='JoeZ' class="avatarIcon">						
										<Avatar alt="Joe Zhou" src={JoeZAvatar} variant="square" sx={{ width: 50, height: 55 }} onClick={() => {sayHello('Joe Zhou');}}
										onMouseEnter={() => sayHello('Joe Zhou')} onMouseLeave={() => sayHello()}/> 					
									</div>
									<div class='avatarStatus'>Joe Zhou</div>
								</div>	
							<div class='avatarContainer'>
								<div class="avatarIcon">
									<Avatar alt="Chloe" src={ChloeAvatar} variant="square" sx={{ width: 50, height: 60 }} onClick={() => {sayHello('Chloe');}}
									onMouseEnter={() => sayHello('Chloe')} onMouseLeave={() => sayHello()}/> 
								</div>
								<div class='avatarStatus'>Chloe</div>

							</div>
							<div class='avatarContainer'>	
								<div class="avatarIcon">
									<Avatar alt="TJin" src={TJinAvatar} variant="square" sx={{ width: 60, height: 50 }} onClick={() => {sayHello('TJin');}}
									onMouseEnter={() => sayHello('TJin')} onMouseLeave={() => sayHello()}/> 
								</div>
								<div class='avatarStatus'>Tjin</div>

							</div>
							<div class='avatarContainer'>
								<div class="avatarIcon">
									<Avatar alt="Joe Sun" src={JoeSAvatar} variant="square" sx={{ width: 50, height: 50 }} onClick={() => {sayHello('Joe Sun');}}
									onMouseEnter={() => sayHello('Joe Sun')} onMouseLeave={() => sayHello()}/>
								</div>
								<div class='avatarStatus'>Joe Sun</div>

							</div>			
							</Stack>
						</div>

					</div>
					{/* <div className="playerStatus">
						<div className="personalMsg">
							<p>{ comments }</p>
						</div>
					</div> */}
				</div>
		
			</div>
		);
	};

export default Home

