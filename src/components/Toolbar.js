class Toolbar {
    constructor(selFilter) {
        this.selFilter = selFilter;
    }

    handleClick = () => {console.log(selFilter)};

    render() {
        return(
            <div>
                <Toolbar selected={this.selFilter} onSelectFilter={handleClick}/>    
            </div>
        )
    }
}

export default Toolbar;
