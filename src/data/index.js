import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const menu = [
  { icon: <HomeIcon />, title: "Home", path: "home" },
  { icon: <SettingsIcon />, title: "Settings", path: "settings" },
  { icon: <LogoutIcon />, title: "Logout" },
];

export const menu1 = [
  { title: "1.1 Personal Information", path: "/" },
  {
    title: "1.2 Diabetic Complications & Neuropathy",
    path: "/DiabeticComplications",
  },
  { title: "1.4 DNS Score", path: "/DNS Score" },
  {
    title: "1.5 Rutherford Grade & Personal History ",
    path: "/RutherfordGrade",
  },
  { title: "1.6 Estimated Time of foot lesion", path: "/Footlesion" },
  { title: "1.7 NDS", path: "/nds" },
  { title: "1.8 PEDIS", path: "/pedis" },
  { title: "1.11 SINBAD", path: "/Sinbad" },
  { title: "1.12 Other Observations (Foot)", path: "/Observations" },
  { title: "1.13 Pulsations", path: "/Pulsations" },
  { title: "1.14 VPT SCORE", path: "/VPTSCORE" },
  { title: "1.15 TCPO2 ", path: "/TCPO2" },
  { title: "1.16 Probe to bone test", path: "/Probe to bone test" },
  { title: "1.17 Radiography Findings", path: "/Radiography Findings" },
  { title: "1.3 DNS Score", path: "/DNS Score" },
  // { title: "1.5 Estimated Time of foot lesion", path:'/Estimated Time of foot lesion' },
  { title: "1.2 Diabetic Complications", path: "/DiabeticComplications" },
  { title: "1.3 Neuropathy", path: "/Neuropathy" },
  // { title: "1.7 Estimated Time of foot lesion", path:'/Estimated Time of foot lesion' },
  {
    title: "1.18 Bio-chemical investigations",
    path: "/Bio-chemicalinvestigations",
  },
  { title: "1.19 Anti-diabetic & Treatment", path: "/Antidiabetic&Treatment" },
  { title: "1.22 Antibiotic Related Date", path: "/Antibiotic Related Date" },
];
export const menu2 = [
  { title: "Acute/Chronic" },
  { title: "Diabetic Complications" },
  { title: "Neuropathy" },
  { title: "Treatment Offered" },
  { title: "" },
];
