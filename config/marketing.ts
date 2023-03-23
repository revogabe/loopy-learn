import { MarketingConfig } from "types"

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "About us",
      href: "/about",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true,
    },
    {
      title: "Glossary",
      href: "/docs",
      disabled: true,
    },
  ],
}
