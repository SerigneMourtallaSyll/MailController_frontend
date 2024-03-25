import React from "react";

function TemplateContent() {
  return (
    <div className="col-12 pt-3">
        <div class="table-responsive">
            <table class="table table-borderless">
            <thead>
                <tr>
                <th scope="col" className="text-uppercase">
                    Name
                </th>
                <th scope="col" className="text-uppercase">
                    Content
                </th>
                <th scope="col" className="text-uppercase">
                    Last modified
                </th>
                </tr>
            </thead>
            <tbody></tbody>
            </table>
        </div>
    </div>
  );
}

export default TemplateContent;
