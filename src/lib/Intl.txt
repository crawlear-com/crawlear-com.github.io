import "server-only";

import { createIntl } from "@formatjs/intl";
import type { Locale } from "../../i18n-config";

export async function getIntl(locale: Locale) {
  return createIntl({
    locale: locale,
    messages: (await import(`../lang/${locale}.json`)).default,
  });
}