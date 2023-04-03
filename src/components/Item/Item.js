import "./Item.css"

const Item = ({ id, img, name, description }) => {
    return (
        <div className="item_container">
            <div className="item_img">
            <img className="item_img-img" src={img} alt={name} />
            </div>
            <div className="item_content">
                <h1 className="item_name">{name}</h1>
                <button className="item_btn" data-bs-toggle="modal" data-bs-target="#Modal" >Ver detalle</button>







                <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{name} </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {description}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    )
}
export default Item

