const SearchBar = () => (
    <form action="/" method="get" style={{marginTop:'1%'}}>
        <input
            type="text"
            id="header-search"
            placeholder="Filter by endpoint..."
            name="s" 
            style={{width:'800px'}}
        />
    </form>
);

export default SearchBar;