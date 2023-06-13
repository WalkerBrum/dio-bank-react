
import { Button, Center } from '@chakra-ui/react'

interface IButtonAllAplicationProps {
  text?: string
  size: string
  color: string
  disabled?: boolean
  click: () => void
}

export const ButtonAllAplication: React.FC<IButtonAllAplicationProps> = ({ text, click,size, color, disabled }) => {
  return (
    <Center>
      <Button
        colorScheme={color}
        size={size}
        width='100%'
        marginTop='5px'
        isDisabled={disabled}
        onClick={click}
      >
        {text}
      </Button>
    </Center>
  )
}