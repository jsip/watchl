import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const InfoTabs = ({ ticker, size }) => {
  let width, height;
  size === "lg"
    ? ((width = 900), (height = 500))
    : ((width = 500), (height = 350));
  let sentimentVal = Math.random() * 100;

  const [sentimentValue, setSentimentValue] = useState(sentimentVal);

  const changeSentimentValue = (newVal) => {
    setSentimentValue(newVal);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {}, [sentimentValue]);
  return (
    <Tabs variant="solid-rounded" isLazy={true} colorScheme="twitter">
      <TabList>
        <Tab
          borderWidth="0px"
          color="gray.600"
          _hover={{
            bg: "blue.500",
          }}
          mr={2}
        >
          <b>Chart</b>
        </Tab>
        <Tab
          borderWidth="0px"
          color="gray.600"
          _hover={{
            bg: "blue.500",
          }}
          mr={2}
        >
          <b>Technicals</b>
        </Tab>
        <Tab
          borderWidth="0px"
          color="gray.600"
          _hover={{
            bg: "blue.500",
          }}
          mr={2}
        >
          <b>Catalysts</b>
        </Tab>
        <Tab
          borderWidth="0px"
          color="gray.600"
          _hover={{
            bg: "blue.500",
          }}
          mr={2}
        >
          <b>Fundamentals</b>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel p={2}>
          <GridItem>
            {/* <img
        src="https://i.gyazo.com/6fbfea9f2352b16610cb5c2e88f4481a.png"
        alt=""
      /> */}
            <Chart
              width={width}
              height={height}
              chartType="CandlestickChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Date", "a", "b", "c", "d"],
                ["15", 20, 28, 38, 45],
                ["", 31, 38, 55, 66],
                ["21", 50, 55, 77, 80],
                ["", 77, 77, 66, 50],
                ["27", 68, 66, 22, 15],
                ["", 77, 80, 66, 50],
                ["02", 88, 77, 66, 50],
                ["", 50, 55, 77, 80],
                ["08", 31, 38, 55, 66],
                ["", 77, 77, 66, 50],
                ["15", 68, 66, 22, 15],
                ["", 50, 55, 77, 80],
                ["21", 88, 66, 65, 60],
                ["", 88, 77, 66, 50],
                ["27", 108, 116, 126, 128],
                ["", 108, 120, 136, 145],
                ["03", 118, 124, 138, 147],
                ["", 130, 160, 176, 189],
                ["09", 125, 130, 120, 115],
              ]}
              options={{
                title: `${ticker} Price action`,
                legend: "none",
                bar: { groupWidth: "85%" },
                chartArea: {
                  width: "85%",
                  height: "75%",
                },
                backgroundColor: "#f8fbff",
                candlestick: {
                  fallingColor: {
                    strokeWidth: 0,
                    fill: "#ef5350",
                  },
                  risingColor: {
                    strokeWidth: 0,
                    fill: "#26a69a",
                  },
                },
                vAxis: {
                  gridlines: {
                    color: "transparent",
                  },
                },
                hAxis: {
                  gridlines: {
                    color: "#ffffff",
                  },
                },
              }}
            />
            <Flex>
              <Badge
                colorScheme="orange"
                mr={2}
                _hover={{
                  color: "orange.700",
                  cursor: "pointer",
                }}
              >
                13 EMA <b style={{ fontWeight: 800 }}>33.17$</b>
              </Badge>
              <Badge
                colorScheme="green"
                mr={2}
                _hover={{
                  color: "green.700",
                  cursor: "pointer",
                }}
              >
                20 EMA <b style={{ fontWeight: 800 }}>31.75$</b>
              </Badge>
              <Badge
                colorScheme="purple"
                mr={2}
                _hover={{
                  color: "purple.700",
                  cursor: "pointer",
                }}
              >
                50 EMA <b style={{ fontWeight: 800 }}>29.33$</b>
              </Badge>
            </Flex>
          </GridItem>
        </TabPanel>
        <TabPanel p={2}>
          <GridItem>
            <Chart
              width={width}
              height={height}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  { type: "number", label: "x" },
                  { type: "number", label: "values" },
                  {
                    id: "i0",
                    type: "number",
                    role: "interval",
                  },
                  {
                    id: "i1",
                    type: "number",
                    role: "interval",
                  },
                  {
                    id: "i2",
                    type: "number",
                    role: "interval",
                  },
                  {
                    id: "i2",
                    type: "number",
                    role: "interval",
                  },
                  {
                    id: "i2",
                    type: "number",
                    role: "interval",
                  },
                  {
                    id: "i2",
                    type: "number",
                    role: "interval",
                  },
                ],
                [1, 100, 90, 110, 85, 96, 104, 120],
                [2, 120, 95, 130, 90, 113, 124, 130],
                [3, 130, 105, 131, 100, 117, 133, 133],
                [4, 90, 85, 95, 85, 88, 92, 95],
                [5, 70, 74, 63, 67, 69, 70, 72],
                [6, 30, 39, 22, 21, 28, 34, 40],
                [7, 80, 77, 83, 70, 77, 85, 90],
                [8, 100, 90, 110, 85, 95, 102, 110],
              ]}
              options={{
                title: `${ticker} price displacement`,
                backgroundColor: "#f8fbff",
                curveType: "function",
                chartArea: {
                  width: "85%",
                  height: "75%",
                },
                vAxis: {
                  gridlines: {
                    color: "transparent",
                  },
                },
                hAxis: {
                  gridlines: {
                    color: "transparent",
                  },
                },
                intervals: { color: "series-color" },
                interval: {
                  i0: {
                    color: "#4374E0",
                    style: "bars",
                    barWidth: 0,
                    lineWidth: 0,
                    pointSize: 0,
                    fillOpacity: 1,
                  },
                  i1: {
                    color: "#E49307",
                    style: "bars",
                    barWidth: 0,
                    lineWidth: 0,
                    pointSize: 0,
                    fillOpacity: 1,
                  },
                  i2: {
                    style: "area",
                    curveType: "function",
                    fillOpacity: 0.3,
                  },
                },
                legend: "none",
              }}
            />
          </GridItem>
        </TabPanel>
        <TabPanel>
          <Box mb={2}>
            <Flex>
              <Heading fontSize="lg" textAlign="left">
                Social Sentiment
              </Heading>
              <Spacer />
              <Badge colorScheme={sentimentValue > 50 ? `green` : `red`}>
                {sentimentValue > 50 ? `Bullish 🐂` : `Bearish 🌈🐻`}
              </Badge>
            </Flex>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={sentimentValue}
              onChangeEnd={(val) => changeSentimentValue(val)}
            >
              <SliderTrack>
                <SliderFilledTrack
                  bgColor={sentimentValue > 50 ? `green` : `red`}
                />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Grid templateColumns={"repeat(2, 1fr)"} gap={6}>
            <GridItem>
              <Heading fontSize="md" textAlign="left" mb={4}>
                Technical Catalysts
              </Heading>
              <Box>
                <Chart
                  width={width / 1.8}
                  height={height / 1.5}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Volume", "Relative Volume"],
                    ["3 Day Average", 4.85],
                    ["6 Day Average", 2.66],
                    ["20 Day Average", 1.516],
                    ["1 Month Average", 1.391],
                  ]}
                  options={{
                    legend: "none",
                    backgroundColor: "#f8fbff",
                    chartArea: {
                      width: "85%",
                      height: "75%",
                    },
                    pieSliceText: "label",
                    slices: {
                      1: { color: "#4299E1" },
                      2: { color: "#83BDEC" },
                      3: { color: "#B8D9F4" },
                      4: { color: "#2183D4" },
                    },
                  }}
                  rootProps={{ "data-testid": "4" }}
                />
              </Box>
            </GridItem>
            <GridItem>
              <Heading fontSize="md" mb={4} textAlign="left">
                Relevant News
              </Heading>
              <VStack spacing={6} align="stretch" textAlign="left">
                <Box
                  h="auto"
                  shadow="md"
                  borderWidth="2px"
                  boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 50%)"}
                  _hover={{
                    borderColor: "blue.100",
                  }}
                  borderColor="blue.50"
                  borderRadius="10px"
                  p={2}
                  color="gray.800"
                  lineHeight={1.6}
                >
                  <Heading fontSize="md">{ticker}: Q1 Blowout</Heading>
                  <Text fontSize="x-small" color="gray.500">
                    <b>Reuters</b>
                  </Text>
                  <Text fontSize="small">
                    Avg YoY Rev Growth: <b>[82%]</b>. Is this growth
                    sustainable?
                  </Text>
                </Box>
              </VStack>
              <VStack align="stretch" textAlign="left" mb={4}>
                <Box>
                  <Heading fontSize="md" mt={4} mb={4}>
                    Recent SEC Filings
                  </Heading>
                  <Box
                    h="auto"
                    shadow="md"
                    borderWidth="2px"
                    boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 50%)"}
                    _hover={{
                      borderColor: "blue.100",
                    }}
                    borderColor="blue.50"
                    borderRadius="10px"
                    p={2}
                    color="gray.900"
                  >
                    <Heading fontSize="md">
                      <Text fontSize="small" lineHeight={1.6}>
                        {ticker}: 8-K/Current Report
                      </Text>
                    </Heading>
                  </Box>
                </Box>
              </VStack>
            </GridItem>
          </Grid>
        </TabPanel>
        <TabPanel>
          <Heading fontSize="lg" textAlign="left" mb={2}>
            Key Fundamentals for {ticker}
          </Heading>
          <VStack align="stretch" textAlign="left" mb={4}>
            <Flex>
              {/* <ul style={{ listStyle: "none" }}>
            <li>Asset Reproduction Value</li>
            <li>Benjamin Graham Value</li>
            <li>Earnings Power Value</li>
            <li>P/E Growth Model</li>
            <li>Discounted Cash Flow & Reversed DCF</li>
            <li>Dividend Discount Model</li>
            <li>Custom Fundamentals Analysis Model</li>
          </ul> */}
              <Stat>
                <StatLabel>Benjamin Graham Value</StatLabel>
                <StatNumber>$32.45</StatNumber>
                <StatHelpText>V = EPS × (8.5 + 2n) × 4.4</StatHelpText>
              </Stat>
              <Spacer />
              <Button colorScheme={"twitter"} mt={2} onClick={onOpen}>
                Choose Formula
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  colorScheme={"whiteAlpha"}
                  backgroundColor="white"
                >
                  <ModalHeader>Choose a valuation formula.</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <RadioGroup defaultValue="1">
                      <Stack>
                        <Radio value="1" >
                          <Text>Benjamin Graham Value</Text>
                        </Radio>
                        <Radio value="2">
                          <Text>Asset Reproduction Value</Text>
                        </Radio>
                        <Radio value="3">
                          <Text>Earnings Power Value</Text>
                        </Radio>
                        <Radio value="4">
                          <Text>P/E Growth Model</Text>
                        </Radio>
                        <Radio value="5">
                          <Text>Discounted Cash Flow & Reversed DCF</Text>
                        </Radio>
                        <Radio value="6">
                          <Text>Dividend Discount Model</Text>
                        </Radio>
                        <Radio value="7">
                          <Text>Custom Fundamentals Analysis Model</Text>
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="red" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button variant="solid" colorScheme="blue">
                      Confirm
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </VStack>
          <Tabs variant="unstyled">
            <TabList>
              <Tab
                borderWidth="0px"
                borderRadius="15px"
                color="gray.600"
                _hover={{
                  bg: "blue.500",
                }}
                mr={2}
              >
                <Text fontSize="small" lineHeight={1.6}>
                  Income Statement
                </Text>
              </Tab>
              <Tab
                borderWidth="0px"
                borderRadius="15px"
                color="gray.600"
                _hover={{
                  bg: "blue.500",
                }}
                mr={2}
              >
                <Text fontSize="small" lineHeight={1.6}>
                  Balance Sheet
                </Text>
              </Tab>
              <Tab
                borderWidth="0px"
                borderRadius="15px"
                color="gray.600"
                _hover={{
                  bg: "blue.500",
                }}
                mr={2}
              >
                <Text fontSize="small" lineHeight={1.6}>
                  Cash Flow Statement
                </Text>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Table size="sm" textAlign="left" colorScheme={"whiteAlpha"}>
                  <Thead>
                    <Tr>
                      <Th>Revenue</Th>
                      <Th>Net Income</Th>
                      <Th isNumeric>Diluted EPS</Th>
                    </Tr>
                  </Thead>
                  <Tbody textAlign="left">
                    <Tr>
                      <Td>1.6B</Td>
                      <Td>800M</Td>
                      <Td isNumeric>15.45$</Td>
                      <Th isNumeric>2018</Th>
                    </Tr>
                    <Tr>
                      <Td>1.6B</Td>
                      <Td>800M</Td>
                      <Td isNumeric>15.45$</Td>
                      <Th isNumeric>2019</Th>
                    </Tr>
                    <Tr>
                      <Td>1.6B</Td>
                      <Td>800M</Td>
                      <Td isNumeric>15.45$</Td>
                      <Th isNumeric>2020</Th>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>44%</Th>
                      <Th>44%</Th>
                      <Th>14%</Th>
                      <Th isNumeric>YoY Growth</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TabPanel>
              <TabPanel>
                <Table size="sm" textAlign="left" colorScheme={"whiteAlpha"}>
                  <Thead>
                    <Tr>
                      <Th>Assets</Th>
                      <Th>Total Debt</Th>
                      <Th isNumeric>Cash</Th>
                    </Tr>
                  </Thead>
                  <Tbody textAlign="left">
                    <Tr>
                      <Td>1.6B</Td>
                      <Td>800M</Td>
                      <Td isNumeric>15.45$</Td>
                      <Th isNumeric>2018</Th>
                    </Tr>
                    <Tr>
                      <Td>1.6B</Td>
                      <Td>800M</Td>
                      <Td isNumeric>15.45$</Td>
                      <Th isNumeric>2019</Th>
                    </Tr>
                    <Tr>
                      <Td>1.6B</Td>
                      <Td>800M</Td>
                      <Td isNumeric>15.45$</Td>
                      <Th isNumeric>2020</Th>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>44%</Th>
                      <Th>44%</Th>
                      <Th>14%</Th>
                      <Th isNumeric>YoY Growth</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TabPanel>
              <TabPanel>
                <Table size="sm" textAlign="left" colorScheme={"whiteAlpha"}>
                  <Thead>
                    <Tr>
                      <Th>Operating</Th>
                      <Th>Investing</Th>
                      <Th isNumeric>FCF</Th>
                    </Tr>
                  </Thead>
                  <Tbody textAlign="left">
                    <Tr>
                      <Td>1.6B</Td>
                      <Td>800M</Td>
                      <Td isNumeric>15.45$</Td>
                      <Th isNumeric>2018</Th>
                    </Tr>
                    <Tr>
                      <Td>1.6B</Td>
                      <Td>800M</Td>
                      <Td isNumeric>15.45$</Td>
                      <Th isNumeric>2019</Th>
                    </Tr>
                    <Tr>
                      <Td>1.6B</Td>
                      <Td>800M</Td>
                      <Td isNumeric>15.45$</Td>
                      <Th isNumeric>2020</Th>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>44%</Th>
                      <Th>44%</Th>
                      <Th>14%</Th>
                      <Th isNumeric>YoY Growth</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default InfoTabs;
