import { Breakpoint, Container } from "@mui/material";
import { ReactNode } from "react"

type ContainerBodyLayoutProps = {
  children: ReactNode,
  maxWidth?: false | Breakpoint
}

function ContainerBodyLayout({ children, maxWidth = "lg" }: ContainerBodyLayoutProps) {
  return <Container maxWidth={maxWidth}>{children}</Container>;
}

export default ContainerBodyLayout;