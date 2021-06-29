import "./PageTable.css";
import { dataTable } from "../../Services/DataTable";

import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useState, useEffect } from "react";
import LoadingSpinner from "./../LoadingSpinner/LoadingSpinner"

function PageTable() {
  const [heading, setHeading] = useState([]);
  const [data, setData] = useState(Array < [] > []);

  useEffect(() => {
    let isSubscribed = true;
    dataTable().then((val) => {
      console.log(val);
      if (isSubscribed) {
        setHeading(val.heading);
        setData(val.dataR);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  if (data) {
    const arr = [];
    data.forEach((val) => {
      const ABC = {};
      heading.forEach((v, index) => {
        ABC[v] = val[index];
      });
      arr.push(ABC);
    });
    const datatable = {
      columns: [
        {
          label: heading[0],
          field: heading[0],
          width: 150,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Name",
          },
          // fontSize:100,
        },
        {
          label: heading[1],
          field: heading[1],
          width: 270,
        },
        {
          label: heading[2],
          field: heading[2],
          width: 200,
        },
        {
          label: heading[3],
          field: heading[3],
          width: 100,
        },
        {
          label: heading[4],
          field: heading[4],
          sort: "disabled",
          width: 150,
        },
        {
          label: heading[5],
          field: heading[5],
          sort: "disabled",
          width: 100,
        },
      ],
      rows: arr,
    };
    return (
      <div className="container-fluid">
        <div className=" row">
          <div className="page-table-body col-lg-10 col-md-10 col-11 m-auto py-0">
            <MDBDataTableV5
              striped
              hover
              entriesOptions={[10, 20, 25]}
              entries={10}
              data={datatable}
              searchBottom={false}
              className="your-custom-styles"
              pagingTop
              searchTop
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="d-flex justify-content-center">
      <LoadingSpinner />;
    </div>
  }
}

export default PageTable;
