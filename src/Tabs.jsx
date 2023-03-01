import React, {useState} from "react";

export function Tabs ({children}) {
    console.log(React.Children.toArray(children))
    console.log(children)
    const tabs = React.Children.toArray(children).map(tab => tab.props.title)
    console.log(tabs)
    const childrenArray = React.Children.toArray(children)
    const [current, setCurrent] = useState(childrenArray[0].key)
    const newChildren = childrenArray.map(child => {
        return React.cloneElement(child, {selected: child.key === current})
    })
    return <div>
        <nav>
            {childrenArray.map(child => (
                <button onClick={() => setCurrent(child.key)} key={child.key} >
                    {child.props.title}
                </button>
            ))}
        </nav>
        <section>
            {newChildren}
        </section>
    </div>;
}

export function Tab ({children, selected}) {
    return <div hidden={!selected}>
        {children}
    </div>;
}