import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ControlCameraIcon from '@mui/icons-material/ControlCamera';

export const menu = [
  { icon: <HomeIcon />, title: "Home", path: "home" },
  { icon: <SettingsIcon />, title: "Settings", path: "settings" },
  { icon: <LogoutIcon />, title: "Logout" },
];

export const menu1 = [
  { icon:<ControlCameraIcon sx={{fontWeight:"none"}} />,title: " Personal Information", path: "/" },
  {
    icon:<ControlCameraIcon/>,title: " Diabetic Complications & Neuropathy",
    path: "/DiabeticComplications",
  },
  { icon:<ControlCameraIcon/>, title: "DNS Score", path: "/DNS Score" },
  {
    icon:<ControlCameraIcon/>, title: "Rutherford Grade & Personal History ",
    path: "/RutherfordGrade",
  },
  {  icon:<ControlCameraIcon/>,title: "Estimated Time of foot lesion", path: "/Footlesion" },
  {  icon:<ControlCameraIcon/>,title: "NDS", path: "/nds" },
  {  icon:<ControlCameraIcon/>,title: "PEDIS", path: "/pedis" },
  { icon:<ControlCameraIcon/>, title: "SINBAD", path: "/Sinbad" },
  {  icon:<ControlCameraIcon/>,title: "Other Observations (Foot)", path: "/Observations" },
  {  icon:<ControlCameraIcon/>,title: "Pulsations", path: "/Pulsations" },
  {  icon:<ControlCameraIcon/>,title: "VPT SCORE", path: "/VPTSCORE" },
  {  icon:<ControlCameraIcon/>,title: "TCPO2 ", path: "/TCPO2" },
  {  icon:<ControlCameraIcon/>,title: "Probe to bone test", path: "/Probe to bone test" },
  {  icon:<ControlCameraIcon/>,title: "Radiography Findings&Co-morbidities&Anthropometry", path: "/Radiography Findings" },
  
  { icon:<ControlCameraIcon/>,
    title: "Bio-chemical investigations",
    path: "/Bio-chemicalinvestigations",
  },
  { icon:<ControlCameraIcon/>, title: "Anti-diabetic & Treatment", path: "/Antidiabetic&Treatment" },
  {  icon:<ControlCameraIcon/>,title: "Antibiotic Related Date", path: "/Antibiotic Related Date" },
];
export const menu2 = [
  { title: "Acute/Chronic" },
  { title: "Diabetic Complications" },
  { title: "Neuropathy" },
  { title: "Treatment Offered" },
  { title: "" },
];
