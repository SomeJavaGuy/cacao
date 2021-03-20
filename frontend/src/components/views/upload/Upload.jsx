import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";

export const Upload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  const apiKey = "943a22605f49d4220dee";
  const apiSecret =
    "ee0a4a944bddade87da802b4bfbcda38d32d1054474321bf15c13793c8d32a2c";

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const data = new FormData();

    // formData.append("File", selectedFile); // this was wrong
    data.append("file", selectedFile, selectedFile.name);

    return axios
      .post(url, data, {
        maxContentLength: "Infinity", //this is needed to prevent axios from erroring out with large files
        headers: {
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          pinata_api_key: apiKey,
          pinata_secret_api_key: apiSecret,
        },
      })
      .then(function (response) {
        //handle response here
        console.log("====>", response);
      })
      .catch(function (error) {
        console.log("====>", error);
      });
  };

  return (
    <section className="pt-5">
      <Container>
        <Row>
          <Col>
            <h1>upload xx...</h1>;
            <div>
              <input type="file" name="file" onChange={changeHandler} />
              {isFilePicked ? (
                <div>
                  <p>Filename: {selectedFile.name}</p>
                  <p>Filetype: {selectedFile.type}</p>
                  <p>Size in bytes: {selectedFile.size}</p>
                  <p>
                    lastModifiedDate:{" "}
                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                  </p>
                </div>
              ) : (
                <p>Select a file to show details</p>
              )}
              <div>
                <button onClick={handleSubmission}>Submit</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
