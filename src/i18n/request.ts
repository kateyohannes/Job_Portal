
import { routing } from "./routing";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale})=>{
    let locale = await requestLocale;

    // @typescript-eslint/no-explicit-any
    if (!locale || !routing.locales.includes(locale as any)){
        locale = routing.defaultLocale
    }

    return {
        locale,
        messages: (await import(`../../dictionary/${locale}.json`)).default
    }
});
