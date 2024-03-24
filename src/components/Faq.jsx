import * as React from "react";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";

export default function AccordionUsage() {
  return (
    <div className=" w-[60%] m-auto">
      <Accordion
        sx={{ marginBottom: "30px", borderRadius: "5px", paddingY: 0.5 }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon fontSize="large" sx={{ color: "#07b2a4" }} />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-lg font-medium"
        >
          How do I call a driver?
        </AccordionSummary>
        <AccordionDetails>
          You can message the driver on clicking "contact" then chatting with
          them to get their phone number.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ marginBottom: "30px", borderRadius: "5px", paddingY: 0.5 }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon fontSize="large" sx={{ color: "#07b2a4" }} />
          }
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg font-medium"
        >
          What if I need to cancel a ride?
        </AccordionSummary>
        <AccordionDetails>
          We understand that plans can change. Both drivers and passengers have
          the option to cancel rides (in "Your rides" on profile), but please do
          so as early as possible to minimize inconvenience to other users.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ marginBottom: "30px", borderRadius: "5px", paddingY: 0.5 }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon fontSize="large" sx={{ color: "#07b2a4" }} />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-lg font-medium"
        >
          How do I publish a ride?
        </AccordionSummary>
        <AccordionDetails>
          Offering a ride on EcoRide is easy. To publish your ride login to your
          account (signup in case you don't have account). Click on "Publish a
          ride" on top of website. Indicate from where , to where , the date ,
          departure time, how many passengers you can take, journey time, and
          the price per seat. Click on proceed to add stop points, if no stop
          point tap "Publish ride" and you're done!
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ marginBottom: "30px", borderRadius: "5px", paddingY: 0.5 }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon fontSize="large" sx={{ color: "#07b2a4" }} />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-lg font-medium"
        >
          How much does a ride cost?
        </AccordionSummary>
        <AccordionDetails>
          The costs of a carpool ride can vary greatly, and depend on factors
          like distance, time of departure, the demand of that ride and more. It
          is also up to the driver to decide how much to charge per seat, so
          it's hard to put an exact price tag on a ride.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ marginBottom: "30px", borderRadius: "5px", paddingY: 0.5 }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon fontSize="large" sx={{ color: "#07b2a4" }} />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-lg font-medium"
        >
          How can I verify my account?
        </AccordionSummary>
        <AccordionDetails>
          Go to "Account". Under "Verify your profile" click on "Verify your
          govt. id" then you have three choices to verify - driving license or
          aadhar card or PAN card. Upload front and back side of your document.
          Within 24 hours, your document will be verified.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ marginBottom: "30px", borderRadius: "5px", paddingY: 0.5 }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon fontSize="large" sx={{ color: "#07b2a4" }} />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-lg font-medium"
        >
          Where do I report an issue on the website?
        </AccordionSummary>
        <AccordionDetails>
          If you encounter any issues or have questions, please contact our team
          through the "Help Center".
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
