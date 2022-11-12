import { Component } from "react";
import CardItem from '../CardItem/index'
import ButtonItem from "../ButtonItem";
import './index.css'
import Modal from "../Modal";

const buttonList=[
    {
        id:1,
        status:"active",
        text:"All"
    }
    ,
    {
        id:2,
        status:"block",
        text:"Blocked"
    },
    {
        id:3,
        status:"your",
        text:"your"
    }
]
class Cards extends Component{
    state={cardsList:[],activeId: buttonList[0].status,setOpenModal:false}
    componentDidMount(){
        this.getCardsDetails()
    }

    getCardsDetails=async()=>{
        const data = await fetch('/cards');
        const items = await data.json();
        this.setState({cardsList:items})
    }
    clickButtonItem = buttonValue => {
        this.setState({activeId: buttonValue})
      }
      getCards = () => {
        const {activeId,cardsList} = this.state
        const filteredCards= cardsList.filter(
          eachCard => eachCard.status ===activeId ,
        )
        return filteredCards
      }

      openModal=()=>{
        this.setState({setOpenModal:true})
      }

      
    render(){
        const {cardsList,activeId,setOpenModal}=this.state
        const filteredCards=this.getCards()
        return(
        <div className="">
        <div className='card-hd'>
        <div className='logo-hd'>
        <h1 className='Heading'>Virtual Cards</h1>
        <img src="https://i.ibb.co/sq3Q4qW/video-Icon.png" className='logo' alt='videoicon'/>
        <p className='learn-hd'>Learn More</p>
        </div>
        <button className='addcard'>+ Virtual Card</button>
        </div>
        <hr/>
        <div className='tot-cards'>
        <ul className="tabs-container">
          {buttonList.map(buttonDetails => (
            <ButtonItem
              key={buttonDetails.tabId}
              buttonDetails={buttonDetails}
              clickButtonItem ={this.clickButtonItem }
              isActive={activeId === buttonDetails.status}
            />
          ))}
        </ul>
        <div className='images-logo'>
        <img className='logo1' src="https://i.ibb.co/4NT8CT9/menu-dot.jpg" alt="menudot"/>
        <img className='logo1' src="https://i.ibb.co/HD3L0db/menu-icon.png" alt='menubar'/>
        </div>
        </div>
        <hr/>
        <div className='filter-card' onClick={this.openModal}>
        <img src="https://i.ibb.co/xCn7sQC/search-logo.jpg" className='logo1 logo2' alt='search'/>
        <div className='filters openModalBtn'>
        <img className='logo1' src="https://i.ibb.co/mHP9Wqb/filter.jpg" alt='filter' />
        <span>Filter</span>
        </div>
        </div>
            {setOpenModal&&<Modal setOpenModal={setOpenModal}/>}
                <ul className="card-box">
                    {filteredCards.map(eachCard=>(
                        <CardItem key={eachCard.owner_id} cardDetails={eachCard}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Cards