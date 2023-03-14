import localFont from "next/font/local";

export const metadata = {
  title: "Trial Task",
  description: "Trial task for icreas.io",
};
const generalSans = localFont({
  src: [
    {
      path: "../public/fonts/GeneralSans-Extralight.otf",
      weight: "200",
      style: "extrLight",
    },
    {
      path: "../public/fonts/GeneralSans-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/GeneralSans-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/GeneralSans-Semibold.otf",
      weight: "600",
      style: "semiBold",
    },
    {
      path: "../public/fonts/GeneralSans-Bold.otf",
      weight: "800",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-general-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={generalSans.variable}>
      <body>{children}</body>
    </html>
  );
}
