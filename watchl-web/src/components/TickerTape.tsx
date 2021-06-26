import {
  Badge,
  Box,
  Flex,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface TickerTapeProps {
  tickers: string;
  changeActiveTicker?: (arg: string) => string;
}

const TickerTape: React.FC<TickerTapeProps> = ({
  tickers,
  changeActiveTicker,
}) => {
  const [activeTicker, setActiveTicker] = useState<string>("");
  useEffect(() => {
    setActiveTicker(activeTicker);
  }, [activeTicker]);

  return (
    <Flex alignContent="right">
      {tickers.split(" ").map((tickr): any => {
        return (
          <Badge
            colorScheme="purple"
            mr={2}
            _hover={{
              color: "purple.700",
              cursor: "pointer",
            }}
            onClick={() => {
              changeActiveTicker(tickr);
            }}
            key={`${tickr}`}
          >
            <Tooltip
              hasArrow
              label={
                <StatGroup>
                  <Stat>
                    <StatLabel>{tickr}</StatLabel>
                    <StatNumber>$345.67</StatNumber>
                    <br />
                    <StatHelpText>
                      <StatArrow type="increase" />
                      23.36%
                    </StatHelpText>
                    <StatHelpText>YTD</StatHelpText>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      9.05%
                    </StatHelpText>
                    <StatHelpText>1M</StatHelpText>
                  </Stat>
                </StatGroup>
              }
              bg="white"
              color="black"
              padding="1em"
              borderRadius="15px"
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
            >
              {tickr}
            </Tooltip>
          </Badge>
        );
      })}
    </Flex>
  );
};

export default TickerTape;
