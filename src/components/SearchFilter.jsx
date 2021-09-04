import { useState } from "react";

export default function SearchFilter({ genders, onFilterName, onFilterEmail, onFilterGender, onFilterDate }) {

  const [fields, setFields] = useState({
    name: "",
    email: "",
    gender: "",
    fromDate: "",
    toDate: ""
  })

  const handleInputsChange = (field) => (e) => {
    const {value} = e.target;

    setFields({
      ...fields,
      [field]: value
    })

    switch (field) {
      case "name":
        onFilterName(value)
        break;
      case "email":
        onFilterEmail(value)
        break;
      case "gender":
        onFilterGender(value)
        break;
      case "fromDate":
        onFilterDate(value, "fromDate")
        break;
      case "toDate":
        onFilterDate(value, "toDate")
        break;
      default:
        break;
    }
  }

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
              autoComplete="off"
              value={fields.name}
              onChange={handleInputsChange('name')}
            />
          </div>
    
          <div className="col-sm-12 my-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              autoComplete="off"
              value={fields.email}
              onChange={handleInputsChange('email')}
            />
          </div>
    
          <div className="col-sm-12 my-2">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="gender"
              value={fields.gander}
              onChange={handleInputsChange('gender')}
            >
              <option value="">Select</option>
              {genders.map(gender => (
                <option value={gender}>{gender}</option>
              ))}
            </select>
          </div>
    
          <div className="col-sm-12 my-2">
            <label htmlFor="startDate">From</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={fields.fromDate}
              onChange={handleInputsChange('fromDate')}
            />
          </div>
          <div className="col-sm-12 my-2">
            <label htmlFor="endDate">To</label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={fields.toDate}
              onChange={handleInputsChange('toDate')}
            />
          </div>
        </div>
      );
}
