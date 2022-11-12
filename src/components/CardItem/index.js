import './index.css'

const CardItem=(props)=>{
    const {cardDetails}=props
    const {name,user_name,budget_name,owner_id,spent,available_to_spend,card_type,expiry,limit,status}=cardDetails
    return(

        <div class="card">
            <h6 className="card-heading">{name}</h6>
            <div className='name-url'>
                <p className="card-text">{user_name}: {budget_name}</p>
                <img className='logo' src={spent.imgUrl} alt="fire"/>
            </div>
            <div className='cardexpiry'>
                <button className="card-type"><i>{card_type}</i></button>
                <p className="card-text"><i>{expiry} limit {limit} {spent.currency}</i></p>
            </div>
            <hr className='line' style={{color: "red",border:"solid 1px green",borderRadius:"20px", marginLeft:"20px",
            marginRight:"20px",height:"5px",
            background:`linear-gradient(90deg,green ${(available_to_spend.value)/(limit)*100}%,red ${(spent.value)/(limit)*100}%)`}}/>
            <div className='spentvalue'>
                <div className='spent'>
                    <div className='circle'></div>
                    <p>Spent</p>
                </div>
                    <p className="card-text"><i>{spent.value} {spent.currency}</i></p>
                </div>
                <div className='availablevalue'>
                    <div className='available'>
                        <div className='circle1'></div>
                            <p>Available to spend</p>
                        </div>
                            <p className="card-text"><i>{available_to_spend.value} {available_to_spend.currency}</i></p>
                </div> 
        </div>
    )
}

export default CardItem