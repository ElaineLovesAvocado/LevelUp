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
				this.setState({comments: null})
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
							<Avatar alt="Linyi" src={LinyiAvatar} sx={{ width: 80, height: 80 }} onClick={() => {this.sayHello('Linyi');} } 
							onMouseEnter={() => this.sayHello('Linyi')} onMouseLeave={() => this.sayHello()} /> Linyi
						</div>
						<div id="Jack">
							<Avatar alt="Jack" src={JackAvatar} sx={{ width: 80, height: 80 }}  onClick={() => {this.sayHello('Jack');}} 
							onMouseEnter={() => this.sayHello('Jack')} onMouseLeave={() => this.sayHello()}/> Jack
						</div>
						<div id="Elaine">
							<Avatar alt="Elaine" src={ElaineAvatar} sx={{ width: 80, height: 80 }} onClick={() => {this.sayHello('Elaine');}}
							onMouseEnter={() => this.sayHello('Elaine')} onMouseLeave={() => this.sayHello()}/> Elaine
						</div>	
						<div id='JoeZ'>						
							<Avatar alt="Joe Zhou" src={JoeZAvatar} sx={{ width: 80, height: 80 }} onClick={() => {this.sayHello('Joe Zhou');}}
							onMouseEnter={() => this.sayHello('Joe Zhou')} onMouseLeave={() => this.sayHello()}/> Joe Zhou					
						</div>					
					</Stack>
					
				</div>
				<br/>

				<div className="avatar2">
					<Stack direction="Column" spacing={8}>
						<div>
							<Avatar alt="Chloe" src={ChloeAvatar} variant="round" sx={{ width: 80, height: 80 }} onClick={() => {this.sayHello('Chloe');}}
							onMouseEnter={() => this.sayHello('Chloe')} onMouseLeave={() => this.sayHello()}/> Chloe
						</div>		
						<div>
							<Avatar alt="TJin" src={TJinAvatar} sx={{ width: 80, height: 80 }} onClick={() => {this.sayHello('TJin');}}
							onMouseEnter={() => this.sayHello('TJin')} onMouseLeave={() => this.sayHello()}/> TJin
						</div>
						<div>
							<Avatar alt="Joe Sun" src={JoeSAvatar} variant="round" sx={{ width: 80, height: 80 }} onClick={() => {this.sayHello('Joe Sun');}}
							onMouseEnter={() => this.sayHello('Joe Sun')} onMouseLeave={() => this.sayHello()}/> Joe Sun
						</div>			
					</Stack>
				</div>

			</div>
	
		</div>
	);}
};

export default Home

