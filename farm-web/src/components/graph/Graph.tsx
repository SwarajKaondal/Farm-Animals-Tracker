import { useSelector } from "react-redux";
import { IRootReducer } from "../../reducers/rootReducer";
import React, { useEffect, useState } from "react";
import { Farm, Movement } from "../../reducers/EntityTypes";
import ReactFlow, { Node, Edge } from "react-flow-renderer";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { Tooltip, TooltipProps, Typography, styled, tooltipClasses } from "@mui/material";

export const Graph = () => {
  const movements = useSelector((state: IRootReducer) => state.movements.data);
  const [currentMovements, setCurrentMovements] = useState<Movement[]>([]);
  const [dateOptions, setDateOptions] = useState<Date[]>([]);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  let movementId = 0;

  const generateRandomPositions = (numNodes: number, minX: number, maxX: number, minY: number, maxY: number, minSpacing: number) => {
    const positions: { x: number; y: number }[] = [];
    const nodeRadius = 50;

    const isValidPosition = (x: number, y: number) => {
      // Check if the new position is within the boundaries and has minimum spacing
      return (
        x >= minX + nodeRadius &&
        x <= maxX - nodeRadius &&
        y >= minY + nodeRadius &&
        y <= maxY - nodeRadius &&
        positions.every((pos) => Math.sqrt((pos.x - x) ** 2 + (pos.y - y) ** 2) >= minSpacing + nodeRadius * 2)
      );
    };

    for (let i = 0; i < numNodes; i++) {
      let x, y;
      do {
        x = Math.random() * (maxX - minX) + minX;
        y = Math.random() * (maxY - minY) + minY;
      } while (!isValidPosition(x, y));

      positions.push({ x, y });
    }

    return positions;
  };

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} arrow />)(
    ({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "rgba(243, 172, 18, 0.1)",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(6),
        border: "1px solid #dadde9",
      },
    })
  );

  useEffect(() => {
    const date = movements[0].movementDate;
    const dateMovements = movements.filter((movement) => movement.movementDate === date);
    setCurrentMovements(dateMovements);

    setDateOptions(Array.from(new Set(movements.map((m) => m.movementDate))));
  }, [movements]);

  useEffect(() => {
    let newNodes: Node[] = [];
    let newEdges: Edge[] = [];
    let farmIds: string[] = [];
    let farms: Farm[] = [];

    currentMovements.forEach((movement) => {
      if (!farmIds.includes(movement.origin_farm_id)) {
        farmIds.push(movement.origin_farm_id);
        farms.push(movement.originFarm);
      }
      if (!farmIds.includes(movement.dest_farm_id)) {
        farmIds.push(movement.dest_farm_id);
        farms.push(movement.destFarm);
      }
      newEdges.push({
        id: movementId + "",
        source: movement.origin_farm_id,
        target: movement.dest_farm_id,
        markerEnd: movement.dest_farm_id,
        label: movement.itemsMoved + " " + movement.species,
      });
      movementId += 1;
    });
    const positions = generateRandomPositions(farms.length, 0, 2000, 0, 900, 50);

    farms.forEach((farm, i) => {
      newNodes.push({
        id: farm.id,
        style: {
          background: "rgba(243, 172, 18, 0.9)",
          width: 200,
          color: "#fff",
          fontSize: "20px",
          fontFamily: "Helvetica",
          boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)",
        },
        data: {
          label: (
            <>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography variant="caption">
                      {"Address: "}
                      <b>{farm.address + ", " + farm.city + ", " + farm.state + ", " + farm.postalCode}</b>
                      <br />
                      {"Total Animals: "}
                      <b>{farm.totalAnimal}</b>
                    </Typography>
                  </React.Fragment>
                }
              >
                <Typography>
                  <u>{farm.name}</u>
                </Typography>
              </HtmlTooltip>
            </>
          ),
        },
        position: positions[i],
      });
    });

    setNodes(newNodes);
    setEdges(newEdges);
  }, [currentMovements]);

  const handleDateChange = (date: Dayjs | null) => {
    if (date != null) {
      const dateMovements = movements.filter((movement) => {
        return dayjs(movement.movementDate).isSame(date);
      });
      setCurrentMovements(dateMovements);
    }
  };

  function disableDates(date: Dayjs) {
    return !dateOptions.some((d) => dayjs(d).isSame(date));
  }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker onChange={handleDateChange} value={dayjs(dateOptions[0])} shouldDisableDate={disableDates} />
      </LocalizationProvider>
      <div style={{ width: "100%", height: "500px", border: "2px solid" }}>
        <ReactFlow nodes={nodes} edges={edges} style={{ width: "100%", height: "500px" }} />
      </div>
    </>
  );
};
