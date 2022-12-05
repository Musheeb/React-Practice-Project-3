function TestProps(props) {
    return (
        <div>
            <h1 style={{color : 'darkorange'}}>This is Testing props component</h1>
            <h2>{props.name} {props.email}</h2>
        </div>
        
    )
}

export default TestProps;