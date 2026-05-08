const Chart = ({path, title}) => {
    return (
        <iframe src={path} title={title} width="600" height="400"/>
    )
}

export default Chart