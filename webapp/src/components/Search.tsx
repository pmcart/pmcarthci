import React, { useState } from 'react';
import { VisitSearch } from '../services/ApiService';

const Search: React.FC = () => {


const formatDate = (datetime: string): string => {
const date = new Date(datetime);
const day = date.getDate().toString().padStart(2, '0');
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const year = date.getFullYear();
return `${month}/${day}/${year}`;
};

const [patientName, setPatientName] = useState('');
const [visits, setVisits] = useState<any[]>([]);

  const handleSearch = async () => {
  let results = await VisitSearch(patientName);
  let formattedResults: any[] = results.map((obj: { visitDate: string; }) => ({
  ...obj,
  visitDate: formatDate(obj.visitDate),
  }));
  setVisits(formattedResults);
  };


  return (
  <div>
    <div className="card card-body col-xl-6 mb-xl-0 mb-4">
      <div className="row">
        <div className="col-lg-6 col-7">
          <h6>Search Patient Visits</h6>
        </div>
      </div>
      <div className="input-group input-group-outline">

        <input type="text" value={patientName} onChange={(e)=> setPatientName(e.target.value)}
        placeholder="Search by patient name"
        />
      </div>
      <br></br>
      <button className='btn bg-gradient-primary w-100' onClick={handleSearch}>Search</button>


    </div>
    <br></br>
    <div className="card card-body col-xl-6 mb-xl-0 mb-4">
      <div className="row">
        <div className="col-lg-6 col-7">
          <h6>Results</h6>
        </div>
        <div className="card-body px-0 pb-2">
          <div className="table-responsive p-0">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Hospital Name
                  </th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>
              <tbody>
                  {visits.length === 0 && <div className="d-flex px-2 py-1">No results found</div>}
                  {visits.map((visit, index) => (

                <tr key={index}>
                  <td>
                    <div className="d-flex px-2 py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <p>{visit.visitDate}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex px-2 py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <p>{visit.hospital.name}</p>
                      </div>
                    </div>
                  </td>
                </tr>

                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

  </div>
  );
  };

  export default Search;