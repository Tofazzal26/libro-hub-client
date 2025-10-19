"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import store from "@/redux/store";

type Props = {
  children: ReactNode;
};
const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
