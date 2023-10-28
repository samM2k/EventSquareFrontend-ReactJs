import './EventFiltersView.css';

function EventFiltersView({ nameFilter, setNameFilter, descriptionFilter, setDescriptionFilter, publicFilter, setPublicFilter, applyFiltersCallback }) {
    return (
        <div className="filters-view">
            <div className='filters'>
                {/* Name filter */}
                <div className="filter">
                    <label htmlFor="name-filter-input">
                        Name
                    </label>
                    <input id="name-filter-input" value={nameFilter} onChange={(e) => {
                        setNameFilter(e.target.value)
                    }} type="text" />
                </div>

                {/* Descriptoin filter */}
                <div className="filter">
                    <label htmlFor="desc-filter-input">
                        Description
                    </label>
                    <input id="desc-filter-input" value={descriptionFilter} onChange={(e) => {
                        setDescriptionFilter(e.target.value)
                    }} type="text" />
                </div>
                {/* Public filter */}
                <div className="filter checkbox-filter">
                    <input id="public-filter-checkbox" value={publicFilter} onChange={(e) => {
                        setPublicFilter(e.target.checked)
                    }} type="checkbox" />
                    <label htmlFor="public-filter-checkbox">
                        Public
                    </label>
                </div>
            </div>
            <button onClick={applyFiltersCallback}>Apply</button>
        </div>
    );
}

export default EventFiltersView;