import { Box } from "@chakra-ui/react";

interface ICardInfoProps {
  text: string
}

export const CardInfo: React.FC<ICardInfoProps> = ({ text }) => {
  return (
    <Box
      backgroundColor='white' 
      minHeight='120px'      
      padding={8}
      borderRadius='25px'
    >
        {text}
    </Box>
  )
}