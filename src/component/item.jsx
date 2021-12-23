const Item = (title,status) => {
    return(
        <div key={item.id} className="todoList" >
                   {item.title} - {item.status ? "Complete" : "Not Complete"}
                   
                    <button onClick={() => handleToggle(item.id,item.status)}>Toggle</button>
                     <button onClick={ () => handleDelete(item.id)}>Delete</button>
                     <Link to={`/item/${item.id}`}>Show more</Link>
                </div>
    )
} 
export default Item;