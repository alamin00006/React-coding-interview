import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalB({ modalB, setShowModalB }) {
  const handleClose = () => setShowModalB(false);
  const [contacts, setContacts] = useState([]);
  const [showData, setShowData] = useState("All Contacts");

  useEffect(() => {
    fetch(`https://contact.mediusware.com/api/contacts/`)
      .then((res) => res.json())
      .then((data) => setContacts(data?.results));
  }, []);

  const usContact = contacts?.filter(
    (data) => data?.country?.name === "United States"
  );
  return (
    <>
      <Modal
        show={modalB}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal B</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            style={{ backgroundColor: "#46139f" }}
            onClick={() => setShowData("All Contacts")}
          >
            All Contacts
          </Button>
          <Button
            style={{ backgroundColor: "#ff7f50" }}
            onClick={() => setShowData("Us Contacts")}
          >
            Us Contacts
          </Button>
          <Button style={{ backgroundColor: "#46139f" }} onClick={handleClose}>
            Close
          </Button>
          <div>
            {showData === "All Contacts"
              ? contacts?.map((data) => <p className="mt-5">{data?.phone}</p>)
              : usContact?.map((data) => <p className="mt-5">{data?.phone}</p>)}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalB;
