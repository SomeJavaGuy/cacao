import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const apiKey = "943a22605f49d4220dee";
const apiSecret =
  "ee0a4a944bddade87da802b4bfbcda38d32d1054474321bf15c13793c8d32a2c";

// const postMetadata = (external_url) => {
//   const metaUrl = 'https://api.pinata.cloud/pinning/pinJsonToIPFS';
//   return axios
//     .post(metaUrl, data, {
//       maxContentLength: "Infinity", //this is needed to prevent axios from erroring out with large files
//       headers: {
//         "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
//         pinata_api_key: apiKey,
//         pinata_secret_api_key: apiSecret,
//       },
//     })
//     .then(function (response) {});
// };

export const Upload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const data = new FormData();

    // formData.append("File", selectedFile); // this was wrong
    data.append("file", selectedFile, selectedFile.name);
    setIsSpinning(true);
    return axios
      .post(url, data, {
        maxContentLength: "Infinity", //this is needed to prevent axios from erroring out with large files
        headers: {
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          pinata_api_key: apiKey,
          pinata_secret_api_key: apiSecret,
        },
      })
      .then((response) => {
        //handle response here
        // setIsSpinning(false);
        console.log("====>", response);

        const external_url = response.data.IpfsHash;

        console.log("external_url", external_url);

        //  await postMetadata(external_url);

        setIsSpinning(false);

        // "name": /* NFT Name - This must be a string */,
        // "description": /* Description of the NFT - This must be a string */,
        // "image": /*  IPFS Hash to our content, this must be prefixed with "ipfs://ipfs/{{ IPFS_HASH ))" - This must be a string */,
        // "external_url": /* This is the link to Rarible which we currently don't have, we can fill this in shortly */,
        // "animation_url": /* IPFS Hash just as image field, but it allows every type of multimedia files. Like mp3, mp4 etc */,
        // // the below section is not needed.
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
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="enter asset name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    name="description"
                    placeholder="enter description"
                  />
                </FormGroup>

                {/* <FormGroup>
                  <Label for="external_url">External URL</Label>
                  <Input
                    type="text"
                    name="external_url"
                    placeholder="enter external url"
                  />
                </FormGroup> */}

                <FormGroup>
                  <Label for="animation_url">Description</Label>
                  <Input
                    type="text"
                    name="description"
                    placeholder="enter description"
                  />
                </FormGroup>
              </Form>
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
            {isSpinning ? <p>Uploading...</p> : null}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
