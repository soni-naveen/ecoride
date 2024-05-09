import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div className="w-[75%] smxl:w-[85%] sm:w-[80%]">
      <Accordion
        sx={{
          marginBottom: "30px",
          borderRadius: "5px",
          paddingY: { xs: 0, sm: 0.5 },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ fontSize: { xs: 28, sm: 35 }, color: "#07b2a4" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-base font-normal sm2xl:text-xs smxl:text-sm"
        >
          How do I call a driver?
        </AccordionSummary>
        <AccordionDetails className="text-sm sm2xl:text-xs">
          You can message the driver on clicking "contact" then chatting with
          them to get their phone number.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          marginBottom: "30px",
          borderRadius: "5px",
          paddingY: { xs: 0, sm: 0.5 },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ fontSize: { xs: 28, sm: 35 }, color: "#07b2a4" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-base font-normal sm2xl:text-xs smxl:text-sm"
        >
          {" "}
          What if I need to cancel a ride?
        </AccordionSummary>
        <AccordionDetails className="text-sm sm2xl:text-xs">
          We understand that plans can change. Both drivers and passengers have
          the option to cancel rides (in "Your rides" on profile), but please do
          so as early as possible to minimize inconvenience to other users.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          marginBottom: "30px",
          borderRadius: "5px",
          paddingY: { xs: 0, sm: 0.5 },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ fontSize: { xs: 28, sm: 35 }, color: "#07b2a4" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-base font-normal sm2xl:text-xs smxl:text-sm"
        >
          {" "}
          How do I publish a ride?
        </AccordionSummary>
        <AccordionDetails className="text-sm sm2xl:text-xs">
          Offering a ride on EcoRide is easy. To publish your ride login to your
          account (signup in case you don't have account). Click on "Publish a
          ride" on top of website. Indicate from where , to where , the date ,
          departure time, how many passengers you can take, journey time, and
          the price per seat. Click on proceed to add stop points, if no stop
          point tap "Publish ride" and you're done!
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          marginBottom: "30px",
          borderRadius: "5px",
          paddingY: { xs: 0, sm: 0.5 },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ fontSize: { xs: 28, sm: 35 }, color: "#07b2a4" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-base font-normal sm2xl:text-xs smxl:text-sm"
        >
          {" "}
          How much does a ride cost?
        </AccordionSummary>
        <AccordionDetails className="text-sm sm2xl:text-xs">
          The costs of a carpool ride can vary greatly, and depend on factors
          like distance, time of departure, the demand of that ride and more. It
          is also up to the driver to decide how much to charge per seat, so
          it's hard to put an exact price tag on a ride.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          marginBottom: "30px",
          borderRadius: "5px",
          paddingY: { xs: 0, sm: 0.5 },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ fontSize: { xs: 28, sm: 35 }, color: "#07b2a4" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-base font-normal sm2xl:text-xs smxl:text-sm"
        >
          {" "}
          How can I verify my account?
        </AccordionSummary>
        <AccordionDetails className="text-sm sm2xl:text-xs">
          Go to "Account". Under "Verify your profile" click on "Verify your
          govt. id" then you have three choices to verify - driving license or
          aadhar card or PAN card. Upload front and back side of your document.
          Within 24 hours, your document will be verified.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          marginBottom: "30px",
          borderRadius: "5px",
          paddingY: { xs: 0, sm: 0.5 },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ fontSize: { xs: 28, sm: 35 }, color: "#07b2a4" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-base font-normal sm2xl:text-xs smxl:text-sm"
        >
          {" "}
          Where do I report an issue on the website?
        </AccordionSummary>
        <AccordionDetails className="text-sm sm2xl:text-xs">
          If you encounter any issues or have questions, please feel contact our team
          through the "Contact Us" page.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
