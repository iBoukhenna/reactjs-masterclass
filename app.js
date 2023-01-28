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
        this.handleChangeTextArea = this.handleChangeTextArea.bind(this)
        this.handleChangeStatus = this.handleChangeStatus.bind(this)
        this.handleChangeProjects = this.handleChangeProjects.bind(this)
        this.handleChangeGendre = this.handleChangeGendre.bind(this)
    }

    handleChange (e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeTextArea (e) {
        this.setState({
            address: e.target.value
        })
    }

    handleChangeStatus (e) {
        this.setState({
            status: e.target.value
        })
    }

    handleChangeProjects (e) {
        this.setState({
            projects: Array.from(e.target.selectedOptions).map(o => o.value)
        })
    }

    handleChangeGendre (e) {
        this.setState({
            gendre: e.target.checked
        })
    }

    render () {
        return <div>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                </div><br/>
                <div>
                    <label htmlFor="address">Address : </label>
                    <textarea id="address" name="address" value={this.state.address} onChange={this.handleChangeTextArea}></textarea>
                </div><br/>
                <div>
                    <label htmlFor="status">Status : </label>
                    <select id="status" name="status" value={this.state.status} onChange={this.handleChangeStatus}>
                        <option value="single">single</option>
                        <option value="married">married</option>
                        <option value="divorce">divorce</option>
                        <option value="separated">separated</option>
                    </select>
                </div><br/>
                <div>
                    <label htmlFor="projects">Projects : </label>
                    <select id="projects" name="projects" value={this.state.projects} onChange={this.handleChangeProjects} multiple>
                        <option value="P01">Project 01</option>
                        <option value="P02">Project 02</option>
                        <option value="P03">Project 03</option>
                    </select>
                </div><br/>
                <div>
                    <label htmlFor="gendre">Gendre : </label>
                    <input type="checkbox" id="gendre" name="gendre" value={this.state.gendre} onChange={this.handleChangeGendre} />
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
