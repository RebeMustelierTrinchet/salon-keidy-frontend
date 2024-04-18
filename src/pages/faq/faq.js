import React from "react";
import styles from "./faq.module.css";

import Accordion from "react-bootstrap/Accordion";

const ITEMS = [
  {
    title: "Language",
    body: "In our team, we have a stylist expert in English, but the rest of the team is mainly composed of Spanish speakers. Although they understand English, they find that communication in Spanish is more effective and fluid.",
  },
  {
    title: "Hours",
    body: "In process",
  },
  {
    title: "Deposit Amount",
    body: " The required deposit to reserve our services ranges between 20 and 100 dollars, depending on the chosen service. This deposit is non-refundable and guarantees your appointment.",
  },
  {
    title: "Appointment Change Policy",
    body: "We understand that unexpected circumstances may arise. Therefore, we offer the flexibility to modify your appointment up to 24 hours before your scheduled time. However, this modification can only be made once to ensure availability for all our clients.",
  },
  {
    title: "Cancellations",
    body: "We understand that plans can change! To cancel your appointment, simply give us a call. Please remember that cancellations must be made by phone; unfortunately, we cannot accept them via text message or email. Also, please let us know at least 24 hours in advance so we can rearrange our schedule. Thank you for your understanding!",
  },
  {
    title: "Missed Appoinments",
    body: "We understand that unforeseen circumstances may arise. As a courtesy, we offer each client the opportunity to reschedule a missed appointment at no additional cost, provided they inform us within the first 30 minutes after the scheduled appointment time.",
  },

  {
    title: "Late Policy",
    body: "e understand that unforeseen circumstances may arise. If you arrive 30 minutes late to your appointment, unfortunately, you will have to wait to be attended to. However, if we are still able to accommodate you on the same day, you will not lose your deposit. In the event that no more slots are available for the day, you will need to schedule another appointment and forfeit your deposit. We appreciate your understanding and punctuality.",
  },
  
  {
    title: "Children Policy",
    body: "For the well-being of all our clients and to maintain a tranquil and relaxed atmosphere, we want to inform you that children under the age of 12 will not be allowed in the beauty salon. We appreciate your understanding and cooperation on this matter",
  },
  {
    title: "About Us",
    body: "",
  },
];

export default function Faqs() {
  return (
    <div className={styles.contenedorPrincipal}>
      <Accordion defaultActiveKey="1" className={styles.contAccordion}>
        {ITEMS.map((item, itemIndex) => {
          return (
            <Accordion.Item className={styles.accordionItem} eventKey={(itemIndex+1).toString()}>
              <Accordion.Header className={styles.accordionItemHeader}>{item.title ?? ""}</Accordion.Header>
              <Accordion.Body>
                {item.body ?? ""}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
