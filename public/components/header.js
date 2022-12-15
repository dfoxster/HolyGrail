function Header(props){
    return (
        <>
            <header>
                <PlusMinus section="header" handle={props.handle} />
                <div className="section">header:{props.data.header}</div>
                <Data data={props.data} />
            </header>
        </>
    );
}