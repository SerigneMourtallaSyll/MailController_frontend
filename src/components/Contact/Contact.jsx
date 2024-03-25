import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="col-6 d-flex justify-content-between align-items-center">
        <form className="d-flex">
          <div className="input-group border rounded">
            <button className="btn" type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              className="form-control border-0 bg-transparent"
              type="search"
              placeholder="Search contacts"
              aria-label="Search"
            />
          </div>
        </form>
        <div>
          <div class="form-check">
            <input
              className="form-check-input p-2"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheck">
              Show only unsubscribed
            </label>
          </div>
        </div>
      </div>
      <div className="pt-1">
        <p>0 contacts</p>
      </div>
      <div className="col-12 pt-3">
        <div class="table-responsive">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col" className="text-uppercase">
                  Name
                </th>
                <th scope="col" className="text-uppercase">
                  Email
                </th>
                <th scope="col" className="text-uppercase">
                  Last contacted on
                </th>
                <th scope="col" className="text-uppercase">
                  unsubscribe
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contact;
