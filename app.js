const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

function Field ({name, value, onChange, children}) {
    return <div className="form-group">
        <label htmlFor={name}>{children} : </label>
        <input type="text" id={name} name={name} value={value} onChange={onChange} className="form-control" />
    </div>
}

function TextArea ({name, value, onChange, children}) {
    return <div className="form-group">
        <label htmlFor={name}>{children} : </label>
        <textarea id={name} name={name} value={value} onChange={onChange} className="form-control"></textarea>
    </div>
}

function CheckBox ({name, value, onChange, children}) {
    return <div className="form-check">
        <label htmlFor={name}>{children} : </label>
        <input type="checkbox" id={name} name={name} checked={value} onChange={onChange} className="form-control" />
    </div>
}

function MultiSelect ({name, value, items, onChange, children}) {
    const options = items.map((item) => <option key={item.key} value={item.key}>{item.value}</option>)
    return <div className="form-select">
        <label htmlFor={name}>{children} : </label>
        <select id={name} name={name} value={value} onChange={onChange} multiple className="form-control">
            {options}
        </select>
    </div>
}

function Select ({name, value, items, onChange, children}) {
    const options = items.map((item) => <option key={item.key} value={item.key}>{item.value}</option>)
    return <div className="form-select">
        <label htmlFor={name}>{children} : </label>
        <select id={name} name={name} value={value} onChange={onChange} className="form-control">
            {options}
        </select>
    </div>
}

function CheckBox ({name, value, onChange, children}) {
    return <div className="form-check">
        <label htmlFor={name}>{children} : </label>
        <input type="checkbox" id={name} name={name} checked={value} onChange={onChange} className="form-control" />
    </div>
}

class Home extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            last_name: 'Amine',
            first_name: 'Ahmed',
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
        const statusItems = [{key:"single",value:"Single"},{key:"married",value:"Married"},{key:"divorce",value:"Divorce"},{key:"separated",value:"Separated"}]
        const projectItems = [{key:"P01",value:"Project 01"},{key:"P02",value:"Project 02"},{key:"P03",value:"Project 03"}]
        return <div className="container">
                <div className="form-group">
                    <label htmlFor="title">Title : </label>
                    <input type="text" id="title" name="title" defaultValue="Engineer" />
                </div><br/>
                <Field name="last_name" value={this.state.last_name} onChange={this.handleChange}>Last Name</Field>
                <br/>
                <Field name="first_name" value={this.state.first_name} onChange={this.handleChange}>First Name</Field>
                <br/>
                <TextArea name="address" value={this.state.address} onChange={this.handleChange}>Address</TextArea>
                <br/>
                <Select name="status" items={statusItems} value={this.state.status} onChange={this.handleChange}>Status</Select>
                <br/>
                <MultiSelect name="projects" items={projectItems} value={this.state.projects} onChange={this.handleChange}>Projects</MultiSelect>
                <br/>
                <CheckBox name="gendre" value={this.state.gendre} onChange={this.handleChange}>Gendre</CheckBox>
                <br/>
            <br/>
            <br/>{JSON.stringify(this.state)}
            <br/>{this.state.last_name}
            <br/>{this.state.first_name}
            <br/>{this.state.address}
            <br/>{this.state.status}
            <br/>{JSON.stringify(this.state.projects)}
            <br/>{this.state.gendre ? 'man' : 'woman'}
        </div>

    }
}

root.render(<Home />)
