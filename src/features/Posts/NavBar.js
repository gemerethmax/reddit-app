

export const NavBar = () => {

   
    return (
        <nav>
            <h1>RedditMinimal</h1>
            <button htmlFor='search'>Search</button>
            <input type="text" id='search' placeholder='...' />
            <ul>
                <li>Home</li>    
            </ul>
        </nav>
    );

}