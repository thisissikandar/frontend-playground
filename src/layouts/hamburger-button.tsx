"use client";

import { ActionIcon } from "rizzui";

import { ReactNode } from "react";
import cn from "@/utils/class-names";
import { DrawerPlacements, useDrawer } from "@/shared/drawer-views/use-drawer";

interface Props {
  view: React.ReactElement;
  placement?: DrawerPlacements;
  containerClassName?: string;
  className?: string;
}

export default function HamburgerButton({
  view,
  placement = "left",
  containerClassName = "max-w-[320px]",
  className,
}: Props) {
  const { openDrawer } = useDrawer();
  return (
    <ActionIcon
      aria-label="Open Sidebar Menu"
      variant="text"
      className={cn("me-3 h-auto w-auto p-0 sm:me-4 xl:hidden", className)}
      onClick={() =>
        openDrawer({
          view,
          placement,
          containerClassName,
        })
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
        />
      </svg>
    </ActionIcon>
  );
}
