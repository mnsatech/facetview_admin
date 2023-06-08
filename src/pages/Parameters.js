import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { ListBox } from "primereact/listbox";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Dropdown } from "primereact/dropdown";

const parameters = [
  { name: "Table Size", code: "Table Size" },
  { name: "Crown Angle", code: "Crown Angle" },
  { name: "Pavilion Angle", code: "Pavilion Angle" },
  { name: "Star", code: "Star" },
  { name: "Lower Half", code: "Lower Half" },
];
const values = [
  { value: "44", parameter: "Table Size" },
  { value: "45", parameter: "Table Size" },
  { value: "46", parameter: "Table Size" },
  { value: "47", parameter: "Table Size" },
  { value: "48", parameter: "Table Size" },
  { value: "20", parameter: "Crown Angle" },
  { value: "20.5", parameter: "Crown Angle" },
  { value: "21", parameter: "Crown Angle" },
  { value: "21.5", parameter: "Crown Angle" },
  { value: "22", parameter: "Crown Angle" },
  { value: "22.5", parameter: "Crown Angle" },
];

const Parameters = () => {
  const [selectedParameter, setSelectedParameter] = useState("");
  const [diamondParameter, setDiamondParameter] = useState("");
  const [rowsData, setRowsData] = useState(parameters);
  const [valuesData, setValuesData] = useState([]);

  const addRowData = () => {
    if (selectedParameter !== "-1") {
      if (diamondParameter) {
        const rowsInput = {
          value: diamondParameter,
          parameter: selectedParameter,
        };
        setValuesData([...valuesData, rowsInput]);
      } else {
        alert("Diamond Parameter Value Required!");
      }
    } else {
      alert("Please Select Diamond Parameter");
    }
  };

  const handleClickDelete = (data) => {
    const res = rowsData.filter((param) => param.name !== data);
    setRowsData(res);
  };

  const handleChangeParameter = (data) => {
    setSelectedParameter(data);
    getValuesByParameter(data);
  };

  const getValuesByParameter = (paramValue) => {
    console.log("selected Parameter :", paramValue);
    if (paramValue == "-1") {
      setValuesData(values);
      return;
    }
    const res = values.filter((param) => param.parameter == paramValue);
    setValuesData(res);
  };

  const deleteRow = (data) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to delete this parameter?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                handleClickDelete(data);
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      },
    });
  };
  const deleteBodyTemplate = (rowData) => {
    return (
      <Button variant="danger" onClick={deleteRow.bind(this, rowData.name)}>
        Delete
      </Button>
    );
  };

  useEffect(() => {
    setValuesData(values);
  }, []);
  return (
    <div>
      <NavBar />
      <Container>
        <h1>Parameters</h1>
        <Form>
          <Row xs="auto">
            <Col style={{ textAlign: "right" }}>
              <label style={{ padding: "6px" }}>Diamond Parameter : </label>
            </Col>
            <Col style={{ textAlign: "left" }}>
              <Form.Group className="mb-3" controlId="formBasicParameter">
                <Form.Select
                  aria-label="Default select example"
                  value={selectedParameter}
                  onChange={(e) => {
                    handleChangeParameter(e.target.value);
                  }}
                >
                  <option value="-1">--Select Parameter--</option>;
                  {parameters.map((item, index) => {
                    return <option value={item.name}>{item.name}</option>;
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col style={{ textAlign: "left" }}></Col>
          </Row>

          <Row xs="auto">
            <Col style={{ textAlign: "right" }}>
              <label style={{ padding: "6px" }}>Parameter Value : </label>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicParameter">
                <Form.Control
                  type="text"
                  placeholder="Enter diamond parameter value"
                  value={diamondParameter}
                  onChange={(e) => setDiamondParameter(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col style={{ textAlign: "left" }}>
              <Button variant="primary" onClick={addRowData}>
                Save Parameter
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col>
            <DataTable value={valuesData} tableStyle={{ minWidth: "50rem" }}>
              <Column field="parameter" header="Parameter"></Column>
              <Column field="value" header="Code"></Column>
              <Column header="Delete" body={deleteBodyTemplate}></Column>
            </DataTable>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Parameters;
