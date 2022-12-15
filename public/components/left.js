function Left(props){
    return (
        <>
            <aside>
                <PlusMinus section="left" handle={props.handle} />
                <div className="section">left:{props.data.left}</div>
                <Data data={props.data} />
            </aside>
        </>
    );
}