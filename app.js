const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)


class Home extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            name: 'Amine',
            address: 'Algiers',
            status: 'married',
            projects: ['P01', 'P03'],
            gendre: true,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : type === 'select-multiple' ? Array.from(e.target.selectedOptions).map(o => o.value) : e.target.value
        this.setState({
            [name]: value
        })
    }

    render () {
        console.log('render')
        return <div>
                <div>
                    <label htmlFor="title">Title : </label>
                    <input type="text" id="title" name="title" defaultValue="Engineer" />
                </div><br/>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                </div><br/>
                <div>
                    <label htmlFor="address">Address : </label>
                    <textarea id="address" name="address" value={this.state.address} onChange={this.handleChange}></textarea>
                </div><br/>
                <div>
                    <label htmlFor="status">Status : </label>
                    <select id="status" name="status" value={this.state.status} onChange={this.handleChange}>
                        <option value="single">single</option>
                        <option value="married">married</option>
                        <option value="divorce">divorce</option>
                        <option value="separated">separated</option>
                    </select>
                </div><br/>
                <div>
                    <label htmlFor="projects">Projects : </label>
                    <select id="projects" name="projects" value={this.state.projects} onChange={this.handleChange} multiple>
                        <option value="P01">Project 01</option>
                        <option value="P02">Project 02</option>
                        <option value="P03">Project 03</option>
                    </select>
                </div><br/>
                <div>
                    <label htmlFor="gendre">Gendre : </label>
                    <input type="checkbox" id="gendre" name="gendre" value={this.state.gendre} onChange={this.handleChange} />
                </div><br/>
            <br/>
            <br/>{JSON.stringify(this.state)}
            <br/>{this.state.name}
            <br/>{this.state.address}
            <br/>{this.state.status}
            <br/>{JSON.stringify(this.state.projects)}
            <br/>{this.state.gendre ? 'man' : 'woman'}
        </div>

    }
}

root.render(<Home />)
