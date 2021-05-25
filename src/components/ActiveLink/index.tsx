import React, { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/dist/client/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassname: string;
}

export default function ActiveLink({
  children,
  activeClassname,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassname : "";

  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
}
