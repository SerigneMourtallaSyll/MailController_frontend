import React from 'react'
import Skeleton from 'react-loading-skeleton';

function CampagnSkeleton() {
return (
    <div className="col-md-12 as-col-table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th
              scope="col"
              className="th-table-admin"
            >
            OBJET
            </th>

            <th
              scope="col"
              className="th-table-admin"
            >
            Destinataires
            </th>
            <th
              scope="col"
              className="th-table-admin"
            >
            Taux d'ouvertures
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <Skeleton />
            </th>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Skeleton />
            </th>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
        </tr>
          <tr>
            <th scope="row">
              <Skeleton />
            </th>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Skeleton />
            </th>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Skeleton />
            </th>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Skeleton />
            </th>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Skeleton />
            </th>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Skeleton />
            </th>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default CampagnSkeleton