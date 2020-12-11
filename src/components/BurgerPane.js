


const BurgerPane = props => {
    const newBurger = props.burger.map((burgerPart, idx) => 
    <li key={idx} style={{color:burgerPart.color}}>{burgerPart.name}</li>)
    return(
        <div className="burgerPane">
            <ul>
                {newBurger}
            </ul>
            <hr></hr>
            <span>Burger Stacking Area</span>
            <br/>
            <button type="reset" onClick={props.clear} >Make New Burger</button>
        </div>
    )
}

export default BurgerPane;