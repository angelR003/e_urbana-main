import {  Button} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

function sendemail({ correoElectronico, children }) {
    return (
      <Button
        as="a"
        href={`mailto:${correoElectronico}`}
        leftIcon={<EmailIcon />}
        colorScheme='green'
        variant='outline'
      >
        {children} {/* Texto del botón */}
      </Button>
    );
  }


export default sendemail;