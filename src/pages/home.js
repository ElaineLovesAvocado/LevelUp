import React, { Component} from "react";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ElaineAvatar from '../images/Elaine.png'
import JoeZAvatar from '../images/JoeZ.png'
import JoeSAvatar from '../images/JoeS.png'
import ChloeAvatar from '../images/Chloe.png'
import JackAvatar from '../images/Jack.png'
import LinyiAvatar from '../images/Linyi.png'
import TJinAvatar from '../images/TJin.png'
import { TypeAnimation } from 'react-type-animation';
import './home.css'

class Home extends Component{

	constructor(props) {
		super(props);
		this.state = {
			comments: null,
		}
	}

	 sayHello = (personName) => {
		switch (personName){
			case 'Linyi':
				this.setState({comments: personName+": 浅尊重一下，➕10分"})
				//alert("浅尊重一下，➕10分");
				break;
			case 'Jack':
				this.setState({comments: personName+": 我有3个J， 在等TJin出3个10"})
				break;
			case 'TJin':
				this.setState({comments: personName+": 大王要留在最后扣底"})
				break;
			case 'Joe Zhou':
				this.setState({comments: personName+": 要坐在Joe Sun下家, 随时准备上车"})
				break;
			case 'Elaine':
				this.setState({comments: personName+": 今晚又睡不着了， 救命"})
				break;
			case 'Joe Sun':
				this.setState({comments: personName+": 亮主，没人反我拿底牌了啊"})
				break;
			case 'Chloe':
				this.setState({comments: personName+": 这个庄家好菜啊"})
				break;
			default:
				break;
		}
	  };

	  render(){

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
				<p>{ this.state.comments }</p>
			</div>


			<div className="players">
				<div className="avatar1">
					<Stack direction="Column" spacing={8}>
						<div id="linyi">
							<Avatar alt="Linyi" src={LinyiAvatar} sx={{ width: 70, height: 70 }} onClick={() => {this.sayHello('Linyi');}}/> Linyi
						</div>
						<div id="Jack">
							<Avatar alt="Jack" src={JackAvatar} sx={{ width: 70, height: 70 }}  onClick={() => {this.sayHello('Jack');}}/> Jack
						</div>
						<div id="Elaine">
							<Avatar alt="Elaine" src={ElaineAvatar} sx={{ width: 70, height: 70 }} onClick={() => {this.sayHello('Elaine');}}/> Elaine
						</div>	
						<div id='JoeZ'>						
							<Avatar alt="Joe Zhou" src={JoeZAvatar} sx={{ width: 70, height: 70 }} onClick={() => {this.sayHello('Joe Zhou');}}/> Joe Zhou					
						</div>					
					</Stack>
					
				</div>
				<br/>

				<div className="avatar2">
					<Stack direction="Column" spacing={8}>	
						<div>
							<Avatar alt="TJin" src={TJinAvatar} sx={{ width: 70, height: 70 }} onClick={() => {this.sayHello('TJin');}}/> TJin
						</div>
						<div>
							<Avatar alt="Joe Sun" src={JoeSAvatar} sx={{ width: 70, height: 70 }} onClick={() => {this.sayHello('Joe Sun');}}/> Joe Sun
						</div>
						<div>
							<Avatar alt="Chloe" src={ChloeAvatar} sx={{ width: 70, height: 70 }} onClick={() => {this.sayHello('Chloe');}}/> Chloe
						</div>				
					</Stack>
				</div>

			</div>
	
		</div>
	);}
};

export default Home

