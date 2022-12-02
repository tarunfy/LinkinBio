import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import QRCode from "react-qr-code";
import { AuthContext } from "../../contexts/AuthContext";

const QRModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(AuthContext);

  return (
    <>
      <Button onClick={onOpen}>Generate QR</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody className="!p-10">
            <div className="min-w-full flex items-center justify-center">
              <QRCode
                value={`http://localhost:3000/view/${user.details.profile.name}`}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QRModal;
