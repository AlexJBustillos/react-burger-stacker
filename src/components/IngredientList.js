


const IngredientList = props => {
    const mappedIngredients = props.allIngredients.map((ingredient, idx) => 
        <li key={idx} style={{color:ingredient.color}}>{ingredient.name}<button name={ingredient.name} style={{color:ingredient.color}} onClick={(e) => props.moveIngredients(e, idx)}>Go!</button> </li>)
    return(
        <div className="ingredientList">
            <div>Menu Items:</div>
            <ul>
                {mappedIngredients}
            </ul>
        </div>
    )
    
}

export default IngredientList