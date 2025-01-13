export default function FindTalentSearch() {
    useEffect(()=>{

    })
    return(<>
     <div className="flex justify-center w-1/2 mx-auto p-4 bg-purple-950 rounded-lg shadow-md ">
          <div className="flex items-center flex-row gap-4">
            {/* {filterData.map((filter, index) => (
          <Dropdown
          key={index}
          label={filter.label}
          options={filter.options}
          onSelect={(selectedOption) =>
            handleSelect(filter.name, selectedOption)
          }
          selected={selectedFilters[filter.name]}
          className="w-full max-w-xs"
        />   
             ))} */}

            <PreFilterDropdown
              filterData={filterData}
              preSelectedFilters={preSelectedFilters}
              searchResponse={searchResponse}
            />
          </div>
        </div> 
    </>);
}