"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ToAuth = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) => {
  const path = usePathname().split("/")[2];

  const method =
    ["signup", "login"].find((method) => method === path) === "signup"
      ? "login"
      : "signup";

  const t = useTranslations(`Navigate.toAuth.${method}`);

  return (
    <Link
      {...props}
      href={method}
      aria-label={t("description")}
      title={t("description")}
      draggable="false"
      className={clsx(
        "dark:hover:bg-dark-6 hover:bg-dark-1 text-dark-3 hover:text-light-1 dark:text-light-3 font-inter flex h-9 items-center justify-center text-nowrap rounded-full text-sm font-semibold",
        className,
      )}
    >
      {t.raw("label")}
    </Link>
  );
};
