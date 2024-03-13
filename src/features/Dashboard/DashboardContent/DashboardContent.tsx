import { Box, Stack } from "@chakra-ui/react";
import { DashboardButton } from "../DashboardButton/DashboardButton";

import { RiBillFill } from "react-icons/ri";
import { BsBasket } from "react-icons/bs";

export const DashboardContent = () => {
  return (
    <nav>
      <Stack gap={1}>
        <Box>
          <DashboardButton value="Facturación" icon={<RiBillFill />} href="/" />
        </Box>
        <Box>
          <DashboardButton value="Otro apartado" icon={<BsBasket />} href="#" />
        </Box>
      </Stack>
    </nav>
  );
};