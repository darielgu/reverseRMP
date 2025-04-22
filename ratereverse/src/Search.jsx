import './Search.css'
export default function Search(){
    return(
        <div className="Rowcontainer">
            <form>
    
                <h1>Enter a Class</h1>
                <input type="text" name="search" placeholder="CS 310.." />
                <button type="submit" id='button1'>Search</button>

            </form>
        </div>
    )
}