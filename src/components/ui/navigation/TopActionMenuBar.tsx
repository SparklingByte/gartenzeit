"use client";

import ActionMenuItem from "./ActionMenuItem";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type TopActionMenuBarProps = {
  hasBackItem?: boolean;
  hasSettingsItem?: boolean;
  settingsPathname?: "/settings" | "/manage" | string;
};

export default function TopActionMenuBar({
  hasBackItem,
  hasSettingsItem,
  settingsPathname,
}: TopActionMenuBarProps) {
  const router = useRouter();
  const currentPathname = usePathname();

  return (
    <div className="flex justify-between w-100 items-center">
      {hasBackItem && (
        <ActionMenuItem
          text="Back"
          icon="back"
          iconPosition="left"
          onOpen={router.back}
        />
      )}
      {hasSettingsItem && (
        <ActionMenuItem
          text="Settings"
          icon="settings"
          iconPosition="right"
          onOpen={() =>
            router.push(currentPathname + (settingsPathname || "/settings"))
          }
        />
      )}
    </div>
  );
}
