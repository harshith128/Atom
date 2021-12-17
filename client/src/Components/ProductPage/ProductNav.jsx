import "./productnav.css"

const ProductNav = () => {
    return (
        <div className="product_nav">
            <div className="nav_item_div">
                <span className="common_nav_span">Campaign</span>
                <span className="common_nav_span">Risks</span>
                <span className="common_nav_span">FAQ</span>
                <span className="common_nav_span">Updates</span>
                <span className="common_nav_span">Comments</span>
                <span className="common_nav_span">Community</span>
            </div>
            
            <div className="prod_nav_btns_div">
                <button className="backthis_btn">Back this project</button>
                <button className="readme_btn"><img src="images/save.jpg" alt="" className="readme_img" /> Remind me</button>
            </div>
            
        </div>
    )
}

export default ProductNav
