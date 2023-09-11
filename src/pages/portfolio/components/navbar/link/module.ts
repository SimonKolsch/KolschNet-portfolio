import React from "react";
import {LinkProps} from "react-router-dom";

export interface ApiLinkProps extends LinkProps {
  id: string
  title: string;
  tooltip?: string;
}

export interface LinkItemProps extends ApiLinkProps {
  active: string;
  setActive:  React.Dispatch<React.SetStateAction<string>>;
}