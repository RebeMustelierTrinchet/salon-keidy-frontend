import React from "react";
import styles from "./faq.module.css";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

const ITEMS = [
  {
    title: "language",
    body: "language.body",
  },
  {
    title: "hours",
    body: "hours.body",
  },
  {
    title: "deposit_amount",
    body: "deposit_amount.body",
  },
  {
    title: "appointment_change_policy",
    body: "appointment_change_policy.body",
  },
  {
    title: "cancellations",
    body: "cancellations.body",
  },
  {
    title: "missed_appointments",
    body: "missed_appointments.body",
  },
  {
    title: "late_policy",
    body: "late_policy.body",
  },
  {
    title: "children_policy",
    body: "children_policy.body",
  },
  {
    title: "about_us",
    body: "about_us.body",
  },
];

export default function Faqs() {
  const { t } = useTranslation(); 

  return (
    <div className={styles.contenedorPrincipal}>
      <Accordion defaultActiveKey="1" className={styles.contAccordion}>
        {ITEMS.map((item, itemIndex) => {
          return (
            <Accordion.Item className={styles.accordionItem} eventKey={(itemIndex + 1).toString()} key={itemIndex}>
              <Accordion.Header className={styles.accordionItemHeader}>{t(`faq.${item.title}.title`)}</Accordion.Header>
              <Accordion.Body>
                {t(`faq.${item.body}`)}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
