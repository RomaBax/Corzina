import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect, useState, useContext } from "react";
import shop from "../assets/cart2.svg";
import { BasketContext } from "../context/BasketContext";

export const Products = () => {
  const [data, setData] = useState([]);
    const {setBasket} = useContext(BasketContext)

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products))
      .catch((error) => console.log(error));
  }, []);

  const addToBasket = (product) => {
    setBasket(product);
  };

  return (
    <Box>
      <Grid mt={"40px"} templateColumns={"repeat(4,1fr)"} gap={5}>
        {data.map((product) => (
          <GridItem key={product.id} p={3} boxShadow={" 0px 0px 5px 2px grey"}>
            <Image
              borderBottom={"1px solid grey"}
              src={product.images[0]}
              w={"100%"}
              h={250}
              objectFit={"cover"}
            />
            <Heading size={"md"}>{product.title}</Heading>
            <Box gap={2} display="flex" alignItems={"center"}>
              <Text className="text" my={1} w={"240px"}>
                {product.description}
              </Text>
              <Button onClick={() => addToBasket(product)} background={"red"}>
                <img w={20} h={20} src={shop} alt="" />
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
