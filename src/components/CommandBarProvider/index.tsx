import { FC, ReactNode } from "react";
import { MenuConfig, MenuProvider } from "kmenu";
import Menu from "./Menu";
import "./styles.css";

const CommandBarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const config: MenuConfig = {
    backdropColor: "#00000099",
    backgroundColor: "var(--grey12)",
    backdropBlur: 0.1,
    borderWidth: 1,
    borderColor: "var(--grey10)",
    inputBorder: "var(--grey10)",
    inputColor: "var(--grey1)",
    barBackground: "#FFFFFF10",
    headingColor: "var(--grey8)",
    commandInactive: "var(--grey8)",
    commandActive: "var(--grey0)",
    breadcrumbColor: "var(--grey11)",
  };

  return (
    <MenuProvider
      config={config}
      dimensions={{ commandHeight: 50, sectionHeight: 40 }}
    >
      <Menu />
      {children}
    </MenuProvider>
  );
};

export default CommandBarProvider;
