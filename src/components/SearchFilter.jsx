export default function SearchFilter() {
    return (
        <div className="row my-5">
          <div className="col">
            <h4 className="border-bottom">Filters</h4>
          </div>
          <div className="col-sm-12 my-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
            />
          </div>
    
          <div className="col-sm-12 my-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
            />
          </div>
    
          <div className="col-sm-12 my-2">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="gender"
            >
              <option value="">Select</option>
              
            </select>
          </div>
    
          <div className="col-sm-12 my-2">
            <label htmlFor="startDate">From</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
            />
          </div>
          <div className="col-sm-12 my-2">
            <label htmlFor="endDate">To</label>
            <input
              type="date"
              className="form-control"
              id="endDate"
            />
          </div>
        </div>
      );
}
