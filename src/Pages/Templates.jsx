import React from "react";
import TemplateContent from "../components/Templates/TemplateContent";

function Templates() {
  return (
    <div className="container templates">
      <div className="row px-2">
        <div className="d-flex justify-content-between pt-4">
          <h3 className="fw-bold">Tempates</h3>
          <button className="btn py-2 d-flex justify-content-around align-items-center">
            <span className="fs-4">
              <i class="bi bi-plus"></i>
            </span>
            <span>New template</span>
          </button>
        </div>
        <TemplateContent />
      </div>
    </div>
  );
}

export default Templates;
