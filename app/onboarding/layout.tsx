import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Canvas | Onboarding",
};

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
