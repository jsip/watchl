import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  GridItem,
  Grid,
  Box,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  StackDivider,
  VStack,
  Badge,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import Chart from "react-google-charts";

const InfoTabs = ({ ticker, size }) => {
  let width, height;
  size === "lg"
    ? ((width = 800), (height = 500))
    : ((width = 400), (height = 350));
  return (
    <Tabs variant="solid-rounded" isLazy={true} colorScheme="twitter">
      <TabList>
        <Tab
          borderWidth="0px"
          color="gray.600"
          _hover={{
            bg: "blue.500",
          }}
        >
          <b>Chart</b>
        </Tab>
        <Tab
          borderWidth="0px"
          color="gray.600"
          _hover={{
            bg: "blue.500",
          }}
        >
          <b>Technicals</b>
        </Tab>
        <Tab
          borderWidth="0px"
          color="gray.600"
          _hover={{
            bg: "blue.500",
          }}
        >
          <b>Catalysts</b>
        </Tab>
        <Tab
          borderWidth="0px"
          color="gray.600"
          _hover={{
            bg: "blue.500",
          }}
        >
          <b>Fundamentals</b>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
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
          </GridItem>
        </TabPanel>
        <TabPanel>
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
                [2, 120, 95, 130, 90, 113, 124, 140],
                [3, 130, 105, 140, 100, 117, 133, 139],
                [4, 90, 85, 95, 85, 88, 92, 95],
                [5, 70, 74, 63, 67, 69, 70, 72],
                [6, 30, 39, 22, 21, 28, 34, 40],
                [7, 80, 77, 83, 70, 77, 85, 90],
                [8, 100, 90, 110, 85, 95, 102, 110],
              ]}
              options={{
                title: "Stock price displacement",
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
                    lineWidth: 4,
                    pointSize: 10,
                    fillOpacity: 1,
                  },
                  i1: {
                    color: "#E49307",
                    style: "bars",
                    barWidth: 0,
                    lineWidth: 4,
                    pointSize: 10,
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
              <Badge colorScheme="green">Bullish 🐂</Badge>
            </Flex>
            <Slider aria-label="slider-ex-1" defaultValue={80}>
              <SliderTrack>
                <SliderFilledTrack bgColor="green.400" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Grid templateColumns={"repeat(2, 1fr)"} gap={2}>
            <GridItem>
              <Heading fontSize="md" textAlign="left" mb={4}>
                Technical Catalysts
              </Heading>
              <Box>
                <Chart
                  width={width / 2}
                  height={height / 1.3}
                  chartType="BubbleChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["ID", "X", "Y", "Temperature"],
                    ["", 65, 167, 50],
                    ["", 70, 136, 30],
                    ["", 60, 477, 80],
                  ]}
                  options={{
                    title: "Relative Volume",
                    backgroundColor: "#f8fbff",
                    colorAxis: { colors: ["yellow", "red"] },
                    chartArea: {
                      width: "75%",
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
                  }}
                  rootProps={{ "data-testid": "2" }}
                />
              </Box>
            </GridItem>
            <GridItem>
              <Heading fontSize="md" mb={4} textAlign="left">
                Relevant News
              </Heading>
              <VStack spacing={6} align="stretch" textAlign="left">
                <Box
                  h="125px"
                  shadow="md"
                  borderWidth="2px"
                  boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 50%)"}
                  _hover={{
                    borderColor: "blue.100",
                  }}
                  borderColor="blue.50"
                  borderRadius="10px"
                >
                  1
                </Box>
              </VStack>
              <VStack align="stretch" textAlign="left">
                <Box>
                  <Heading fontSize="md" mt={4} mb={4}>
                    Recent SEC Filings
                  </Heading>
                  <Box
                    h="50px"
                    shadow="md"
                    borderWidth="2px"
                    boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 50%)"}
                    _hover={{
                      borderColor: "blue.100",
                    }}
                    borderColor="blue.50"
                    borderRadius="10px"
                  >
                    2
                  </Box>
                </Box>
              </VStack>
            </GridItem>
          </Grid>
          {/* <ul style={{ listStyle: "none" }}>
            <li>Good News</li>
            <li>High Relative Volume</li>
            <li>Mergers & Acquisitions</li>
            <li>Uplists</li>
            <li>Technical Alerts</li>
            <li>SEC Filings</li>
            <li>Social Sentiment</li>
          </ul> */}
        </TabPanel>
        <TabPanel>
          <ul style={{ listStyle: "none" }}>
            <li>Asset Reproduction Value</li>
            <li>Benjamin Graham Value</li>
            <li>Earnings Power Value</li>
            <li>P/E Growth Model</li>
            <li>Discounted Cash Flow & Reversed DCF</li>
            <li>Dividend Discount Model</li>
            <li>Custom Fundamentals Analysis Model</li>
          </ul>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default InfoTabs;
