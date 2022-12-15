function Footer(props){
    return (
        <>
            <footer>
                <PlusMinus section="footer" handle={props.handle} />
                <div className="section">footer:{props.data.footer}</div>
                <Data data={props.data} />
            </footer>
        </>
    );
}