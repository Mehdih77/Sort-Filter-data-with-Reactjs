import { useState } from "react";
import {data} from './MOCK_DATA';
import dayjs from "dayjs";
import Posts from './components/Posts';
import SearchFilter from './components/SearchFilter';

// for same or after the Date we chose
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
dayjs.extend(isSameOrAfter);

// for same or before the Date we chose
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)

function App() {

  const [allData, setAllData] = useState([]);

  const handleGetGenderFromData = () => {
    return [...new Set(data.map(g => g.gender))]
  }

  const handleFilterNames = (name) => {
    const filterNames = data.filter(item => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    })
    setAllData(filterNames)
  };

  const handleFilterEmails = (email) => {
    const filterEmail = data.filter(item => {
      if (item.email.toLowerCase().includes(email.toLowerCase())) {
        return item;
      }
    })
    setAllData(filterEmail);
  }

  const handleFilterGenders = (gender) => {
    const filterGender = data.filter(item => {
      if (item.gender === gender) {
        return item;
      }
    })
    setAllData(filterGender)
  }

  // for filter date using dayjs package
  const handleFilterDate = (date, field) => {
    const filterDate = data.filter(item => {
      if (field === 'fromDate' && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      } else if(field === 'toDate' && dayjs(item.date).isSameOrBefore(dayjs(date))) {
        return item
      }
    })
    setAllData(filterDate);
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <SearchFilter
          genders={handleGetGenderFromData()}
          onFilterName={handleFilterNames}
          onFilterEmail={handleFilterEmails}
          onFilterGender={handleFilterGenders}
          onFilterDate={handleFilterDate}
           />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {allData.map(item => (
              <Posts item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;