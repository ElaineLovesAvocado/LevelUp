import React, { Component} from "react";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ElaineAvatar from '../images/Elaine.gif'
import JoeZAvatar from '../images/JoeZ.gif'
import JoeSAvatar from '../images/JoeS.gif'
import ChloeAvatar from '../images/Chloe.gif'
import JackAvatar from '../images/Jack.gif'
import LinyiAvatar from '../images/Linyi.gif'
import TJinAvatar from '../images/TJin.gif'
import { TypeAnimation } from 'react-type-animation';
import './home.css'

const Home = () => {
	const [comments, setComments] = React.useState(null)
	
	 const sayHello = (personName) => {
		switch (personName){
			case 'Linyi':
				setComments(personName+": 本周五我要逃离被吃分的命运 ￣へ￣")
				//alert("浅尊重一下，➕10分");
				break;
			case 'Jack':
				setComments(personName+": 我是rich boy 三连拖小王子")
				break;
			case 'TJin':
				setComments(personName+": 好好好")
				break;
			case 'Joe Zhou':
				setComments(personName+": 我要贴牌啦 (¬◡¬)")
				break;
			case 'Elaine':
				setComments(personName+": 清醒一点 (ಥ﹏ಥ)")
				break;
			case 'Joe Sun':
				setComments(personName+": 浅亮一下")
				break;
			case 'Chloe':
				setComments(personName+": 我的牌「一般」")
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

				<div className="welcomeMsg">
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
				</div>

				<div className="personalMsg">
					<p>{ comments }</p>
				</div>


				<div className="players" >
					<div className="avatar1">
						<Stack direction="Column" spacing={8}>
							<div id="linyi">
								<Avatar alt="Linyi" src={LinyiAvatar} sx={{ width: 80, height: 80 }} onClick={() => {sayHello('Linyi');} } 
								onMouseEnter={() => sayHello('Linyi')} onMouseLeave={() => sayHello()} /> Linyi
							</div>
							<div id="Jack">
								<Avatar alt="Jack" src={JackAvatar} sx={{ width: 80, height: 80 }}  onClick={() => {sayHello('Jack');}} 
								onMouseEnter={() => sayHello('Jack')} onMouseLeave={() => sayHello()}/> Jack
							</div>
							<div id="Elaine">
								<Avatar alt="Elaine" src={ElaineAvatar} sx={{ width: 80, height: 80 }} onClick={() => {sayHello('Elaine');}}
								onMouseEnter={() => sayHello('Elaine')} onMouseLeave={() => sayHello()}/> Elaine
							</div>	
							<div id='JoeZ'>						
								<Avatar alt="Joe Zhou" src={JoeZAvatar} sx={{ width: 80, height: 80 }} onClick={() => {sayHello('Joe Zhou');}}
								onMouseEnter={() => sayHello('Joe Zhou')} onMouseLeave={() => sayHello()}/> Joe Zhou					
							</div>					
						</Stack>
						
					</div>
					<br/>

					<div className="avatar2">
						<Stack direction="Column" spacing={8}>
							<div>
								<Avatar alt="Chloe" src={ChloeAvatar} variant="round" sx={{ width: 80, height: 80 }} onClick={() => {sayHello('Chloe');}}
								onMouseEnter={() => sayHello('Chloe')} onMouseLeave={() => sayHello()}/> Chloe
							</div>		
							<div>
								<Avatar alt="TJin" src={TJinAvatar} sx={{ width: 80, height: 80 }} onClick={() => {sayHello('TJin');}}
								onMouseEnter={() => sayHello('TJin')} onMouseLeave={() => sayHello()}/> TJin
							</div>
							<div>
								<Avatar alt="Joe Sun" src={JoeSAvatar} variant="round" sx={{ width: 80, height: 80 }} onClick={() => {sayHello('Joe Sun');}}
								onMouseEnter={() => sayHello('Joe Sun')} onMouseLeave={() => sayHello()}/> Joe Sun
							</div>			
						</Stack>
					</div>

				</div>
		
			</div>
		);
	};

export default Home

