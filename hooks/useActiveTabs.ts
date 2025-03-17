"use client";
import { useState } from "react";

export const useActiveTab = (defaultTab: string = "All") => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return { activeTab, setActiveTab };
};
