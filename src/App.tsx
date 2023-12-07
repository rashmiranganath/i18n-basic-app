import { Suspense, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";

interface Locales {
  [key: string]: {
    title: string;
  };
}
const locales: Locales = {
  en: {
    title: "English",
  },
  kn: {
    title: "Kannada",
  },
};

function App(): ReactElement {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);
  return (
    <>
      <ul>
        {Object.keys(locales).map((locale) => (
          <li key={locale}>
            <button
              style={{
                fontWeight:
                  i18n.resolvedLanguage === locale ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(locale)}
            >
              {locales[locale].title}
            </button>
          </li>
        ))}
      </ul>
      <h1>{t("main.header")}</h1>
      <button onClick={() => setMessages(messages + 1)}>
        Add messages + 1
      </button>
      <p>{t("main.new_messages", { count: messages })}</p>
      <p>{t("main.current_date", { date: new Date() })}</p>
      <p>
        {t("main.incoming_message", { from: "Ann" })}
        <br />
        {t("main.message_contents", {
          body: "How are you doing?",
          context: "female",
        })}
      </p>
      <p>
        {t("main.message_contents", {
          body: "Im doing good.How aboubt you?",
          context: "male",
        })}
      </p>
      <p>
        {t("main.message_contents", {
          body: "checking for they context",
          context: "other",
        })}
      </p>
    </>
  );
}

export default function WrapperComponent(): ReactElement {
  return (
    <Suspense fallback="loading">
      <App />
    </Suspense>
  );
}
