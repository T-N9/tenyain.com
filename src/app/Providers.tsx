import {ThemeProvider} from "next-themes";
import {ContextProvider} from "@/context/GeneralContext";

const Providers = ({
                       children,
                   }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ThemeProvider attribute="class">
            <ContextProvider>
                {children}
            </ContextProvider>
        </ThemeProvider>
    )
}

export default  Providers;