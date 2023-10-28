import OverlayButton from "./OverlayButton.jsx"
import { useNavigate } from "react-router-dom";
import './ListView.css';
import React, { useEffect, useState } from "react";

function ListView({ IsAuthorized, children, AddEntryRoute }) {
    const navigate = useNavigate();
    const [childrenToShow, setChildrenToShow] = useState(null)
    const [pages, setPages] = useState(1);
    const [page, setPage] = useState(0);


    useEffect(() => {
        var allChildren = React.Children.toArray(children);
        setChildrenToShow(allChildren.slice(0, 10))
        setPages(Math.ceil(allChildren.length / 10))
    }, [children])

    function updatePage(n) {
        if (n < 0) {
            n = 0
        }
        if (n >= pages) {
            n = pages - 1;
        }
        var allChildren = React.Children.toArray(children);
        var startIndex = n * 10;
        var newChildren = allChildren.slice(startIndex, startIndex + 10);
        setPage(n);
        setChildrenToShow(newChildren);
    }

    function getPaginationButtons() {
        var childs = [];
        for (let i = 0; i < pages; i++)
            childs.push(
                <li className={i == page ? "page-item active" : "page-item"}><a className="page-link" href="#" onClick={() => updatePage(i)}>{i + 1}</a></li>
            )

        return (<>{childs}</>);
    }


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
                        <li className="page-item"><a className="page-link" href="#" onClick={() => updatePage(page - 1)}>Previous</a></li>
                        {getPaginationButtons()}
                        <li className="page-item"><a className="page-link" href="#" onClick={() => updatePage(page + 1)}>Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default ListView;