const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

const ProductRow =  React.memo(function ({product}) {
    const name = product.stocked ? product.name : <span style={{color : 'red'}}>{product.name}</span>
    //console.log('render')
    //wait(500)
    return <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
})

function ProductCategoryRow ({category}) {
    return <tr>
        <th colSpan="2">{category}</th>
    </tr>
}

function ProductTable ({products, inStockOnly, filterText}) {
    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if (
            (inStockOnly && !product.stocked) || 
            product.name.indexOf(filterText) === -1
        ) {
            return
        }
        if (product.category !== lastCategory) {
            lastCategory = product.category
            rows.push(<ProductCategoryRow key={lastCategory} category={lastCategory} />)
        }
        // don't use event like this onClick={() => this.demo = 1}
        rows.push(<ProductRow key={product.name} product={product} />)
    })

    return <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

class SearchBar extends React.Component {
    constructor (props) {
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange (e) {
        this.props.onFilterTextChange(e.target.value)
    }

    handleInStockChange (e) {
        this.props.onStockChange(e.target.checked)
    }

    render () {
        const {filterText, inStockOnly} = this.props
        return <div className="mb-3">
            <div className="form-group mb-0">
                <input type="text" value={filterText} className="form-control" placeholder="Search" onChange={this.handleFilterTextChange} />
            </div>
            <div className="form-check">
                <input type="checkbox" checked={inStockOnly} className="form-check-input" id="stock" onChange={this.handleInStockChange} />
                <label htmlFor="stock" className="form-check-label">Product available</label>
            </div>
        </div>
    }
}

class FilterableProductTable extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            filterText: '',
            inStockOnly: false
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.products !== this.props.products
        || nextState.filterText !== this.props.filterText
        || nextState.inStockOnly !== this.props.inStockOnly
    }

    handleFilterTextChange (filterText) {
        this.setState({filterText})
    }

    handleInStockChange (inStockOnly) {
        this.setState({inStockOnly})
    }

    render () {
        console.log('render')
        const {products} = this.props
        return <React.Fragment>
            <SearchBar filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}
                onStockChange={this.handleInStockChange}
                onFilterTextChange={this.handleFilterTextChange} />
            <ProductTable products={products}
                inStockOnly={this.state.inStockOnly}
                filterText={this.state.filterText} />
        </React.Fragment>
    }
}

root.render(<FilterableProductTable products={PRODUCTS} />)

//const PRODUCTS2 = PRODUCTS
//PRODUCTS2.push({category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 8"})

const PRODUCTS2 = [...PRODUCTS, {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 8"}]


window.setTimeout(function () {
    root.render(<FilterableProductTable products={PRODUCTS2} />)
}, 20000)

