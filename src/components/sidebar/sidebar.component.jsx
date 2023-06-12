import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";

const SidebarComponent = () => {
  return (
    <div style={{ height: "90vh", width: "80px", background: "#1976D2" }}>
      {/* <Sidebar style={{ backgroundColor: "#212224" }}>
        <Menu
          menuItemStyles={{
            button: ({ level }) => {
              if (level === 0 || level === 1) {
                return {
                  color: "#212224",
                  "&:hover": {
                    backgroundColor: "#FCFCFC !important",
                    color: "#212224 !important",
                    //borderRadius: "8px !important",
                  },
                };
              }
            },
          }}
        >
          <MenuItem
            style={{
              color: "#FCFCFC",
              backgroundColor: "#212224",
            }}
            icon={<TrendingUpIcon />}
          >
            
          </MenuItem>
          <MenuItem
            style={{ color: "#FCFCFC", backgroundColor: "#212224" }}
            icon={<MonitorHeartOutlinedIcon />}
          >
            
          </MenuItem>
          <MenuItem
            style={{ color: "#FCFCFC", backgroundColor: "#212224" }}
            icon={<Inventory2OutlinedIcon />}
          >
            
          </MenuItem>
          <MenuItem
            style={{ color: "#FCFCFC", backgroundColor: "#212224" }}
            icon={<BarChartOutlinedIcon />}
          >
          
          </MenuItem>
          <MenuItem
            style={{ color: "#FCFCFC", backgroundColor: "#212224" }}
            icon={<DescriptionOutlinedIcon />}
          >
            
          </MenuItem>
          <MenuItem
            style={{ color: "#FCFCFC", backgroundColor: "#212224" }}
            icon={<ShoppingCartOutlinedIcon />}
          >
            
          </MenuItem>
          <MenuItem
            style={{ color: "#FCFCFC", backgroundColor: "#212224" }}
            icon={<DonutSmallOutlinedIcon />}
          >
            
          </MenuItem>
          <SubMenu
            style={{ color: "#FCFCFC", backgroundColor: "#212224" }}
            label="Settings"
            icon={<SettingsOutlinedIcon />}
          >
            <MenuItem
              style={{ color: "#FCFCFC", backgroundColor: "#47494D" }}
              icon={<BlurOnOutlinedIcon />}
            >
              Item 1
            </MenuItem>
            <MenuItem
              style={{ color: "#FCFCFC", backgroundColor: "#47494D" }}
              icon={<BlurOnOutlinedIcon />}
            >
              Item 2
            </MenuItem>
            <MenuItem
              style={{ color: "#FCFCFC", backgroundColor: "#47494D" }}
              icon={<BlurOnOutlinedIcon />}
            >
              Item 3
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar> */}
    </div>
  );
};

export default SidebarComponent;
