function EventFiltersView({ nameFilter, setNameFilter, descriptionFilter, setDescriptionFilter, publicFilter, setPublicFilter, applyFiltersCallback }) {
    return (
        <div className="filters">

            {/* Name filter */}
            <label htmlFor="name-filter-input">
                Name
            </label>
            <input id="name-filter-input" value={nameFilter} onChange={(e) => {
                setNameFilter(e.target.value)
            }} type="text" />

            {/* Descriptoin filter */}
            <label htmlFor="desc-filter-input">
                Description
            </label>
            <input id="desc-filter-input" value={descriptionFilter} onChange={(e) => {
                setDescriptionFilter(e.target.value)
            }} type="text" />

            {/* Public filter */}
            <div className="checkbox-filter">
                <input id="public-filter-checkbox" value={publicFilter} onChange={(e) => {
                    setPublicFilter(e.target.checked)
                }} type="checkbox" />
                <label htmlFor="public-filter-checkbox">
                    Public
                </label>
            </div>

            <button onClick={applyFiltersCallback}>Apply</button>
        </div>
    );
}

export default EventFiltersView;