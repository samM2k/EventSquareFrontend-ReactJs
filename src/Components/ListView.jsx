import OverlayButton from "./OverlayButton.jsx"
import { useNavigate } from "react-router-dom";
import './ListView.css';
import React, { useEffect, useState } from "react";

function ListView({ IsAuthorized, children, AddEntryRoute }) {
    const navigate = useNavigate();
    const [childrenToShow, setChildrenToShow] = useState(null)
    const [page, setPage] = useState(0);


    useEffect(() => {
        setChildrenToShow(React.Children.toArray(children))
    }, [children])

    return (
        <div className='list-view'>
            {
                IsAuthorized ?
                    <OverlayButton ioniconName="add" onClick={() => navigate(AddEntryRoute)} />
                    : null
            }
            {childrenToShow}
            <div className="events-list-pagination">
                This is where the pagination will be.
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#" onClick={() => setPage((page - 1) > 0 ? page - 1 : 0)}>Previous</a></li>
                        <li className="page-item active"><a className="page-link" href="#" onClick={() => setPage(0)}>1</a></li>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => setPage(1)}>2</a></li>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => setPage(2)}>3</a></li>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => setPage(page + 1)}>Next</a></li>
                    </ul>
                </nav>
                Current Page: {page}
            </div>
        </div>
    );
}

export default ListView;