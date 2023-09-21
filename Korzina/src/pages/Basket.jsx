import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import trash from '../assets/trash.svg'
export const Basket = () => {
  const { store ,setStore} = useContext(BasketContext);
  console.log(store);
  const onDelete = ()=>{
    setStore([])
  }

  const deleteOne = (id)=>{
    const newData = store.filter((item)=>item.id !== id)
    setStore(newData)
  }
  return (
    <Box>
      {
        !store.length && <Heading my={10}fontSize={60} textAlign={'center'}>Еще нет товара <span style={{fontSize:'70px'}}>!</span></Heading>
      }
      {store.map((item) => (
        <HStack  mb={5} key={item.id} border={'1px solid grey'} > 
          <Image src={item.images[0]}  />
          <Box p={2}>
            <Heading>{item.title}</Heading>
            <Text w={'450px'}>{item.description}</Text>
            <Text as={'b'}>${item.price}</Text>
          </Box>
          <Button colorScheme={'red'} onClick={()=>deleteOne(item.id)}>Delete</Button>
        </HStack>
        
      ))}
      {store.length &&  <Button my={10} onClick={onDelete} color={'red'} justifyContent={'center'} gap={2}>Delete all <Image src={trash}/></Button>}
    </Box>
  );
};
