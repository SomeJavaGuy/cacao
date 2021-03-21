import pinataSDK from "@pinata/sdk";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const ipfsBaseUrl = "https://gateway.pinata.cloud/ipfs/";
const apiKey = "943a22605f49d4220dee";
const apiSecret =
  "ee0a4a944bddade87da802b4bfbcda38d32d1054474321bf15c13793c8d32a2c";

const pinata = pinataSDK(apiKey, apiSecret);

export const Upload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    external_url: "",
    image: "",
  });

  const settingImageRef = useRef(false);

  useEffect(() => {
    if (settingImageRef.current) {
      settingImageRef.current = false;
      const postMetadata = async () => {
        try {
          const jsonToSend = formState;

          const options = {
            pinataMetadata: {
              name: formState.name.replace(/\s/g, ""),
              // keyvalues: {
              //     customKey: 'customValue',
              //     customKey2: 'customValue2'
              // }
            },
          };

          const response = await pinata.pinJSONToIPFS(jsonToSend, options);
          console.log("json meta response ===>", response);
          setIsSpinning(false);
        } catch (e) {
          console.log("Error ", e);
        }
      };
      postMetadata();
    }
  }, [formState]);

  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmission = (e) => {
    const data = new FormData();
    e.preventDefault();
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
      .then(async (response) => {
        const image = ipfsBaseUrl + response.data.IpfsHash;
        settingImageRef.current = true;
        setFormState({
          ...formState,
          image,
        });

        // setIsSpinning(false);

        // "name": /* NFT Name - This must be a string */,
        // "description": /* Description of the NFT - This must be a string */,
        // "image": /*  IPFS Hash to our content, this must be prefixed with "ipfs://ipfs/{{ IPFS_HASH ))" - This must be a string */,
        // "external_url": /* This is the link to Rarible which we currently don't have, we can fill this in shortly */,
        // "animation_url": /* IPFS Hash just as image field, but it allows every type of multimedia files. Like mp3, mp4 etc */,
        // // the below section is not needed.

        //https://drive.google.com/file/d/1lwBD_aNyDcToqlcpopRfzFRiuZg-FaEx/view
        // const buffalo = {
        //   description: "It's actually a bison?",
        //   external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
        //   image: "https://austingriffith.com/images/paintings/buffalo.jpg",
        //   name: "Buffalo",
        // };
      })
      .catch(function (error) {
        console.log("error ====>", error);
      });
  };

  return (
    <section className="pt-5">
      <Container>
        <Row>
          <Col>
            <h1>Upload your NFT asset</h1>;
            <div>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formState.name}
                    placeholder="enter asset name"
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={formState.description}
                    placeholder="enter description"
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="external_url">External Image URL</Label>
                  <Input
                    type="text"
                    name="external_url"
                    value={formState.external_url}
                    placeholder="enter an external image url"
                    onChange={handleInputChange}
                  />
                </FormGroup>

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
                  <Button
                    type="submit"
                    onClick={handleSubmission}
                    color="primary"
                  >
                    Submit
                  </Button>
                  {/* <button onClick={handleSubmission}>Submit</button> */}
                </div>
              </Form>
            </div>
            {isSpinning ? <p>Uploading...</p> : null}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
