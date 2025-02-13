import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import AnimateBU from "../animations/AnimationBU";

export default function AccordionUsage() {
  return (
    <div className="w-[70%] smxl:w-[85%] sm:w-[80%] space-y-7">
      <AnimateBU
        distance={100}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
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
            You can message the driver on clicking "Contact" then chatting with
            them to get their phone number.
          </AccordionDetails>
        </Accordion>
      </AnimateBU>
      <AnimateBU
        distance={100}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
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
            aria-controls="panel2-content"
            id="panel2-header"
            className="text-base font-normal sm2xl:text-xs smxl:text-sm"
          >
            What if I need to cancel a ride?
          </AccordionSummary>
          <AccordionDetails className="text-sm sm2xl:text-xs">
            We understand that plans can change. Both drivers and passengers
            have the option to cancel/delete ride, but please do so as early as
            possible to minimize inconvenience to other users.
          </AccordionDetails>
        </Accordion>
      </AnimateBU>
      <AnimateBU
        distance={100}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
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
            aria-controls="panel3-content"
            id="panel3-header"
            className="text-base font-normal sm2xl:text-xs smxl:text-sm"
          >
            How do I publish a ride?
          </AccordionSummary>
          <AccordionDetails className="text-sm sm2xl:text-xs">
            Offering a ride on EcoRide is easy. To publish your ride login to
            your account (signup in case you don't have account). Click on{" "}
            <Link to="/dashboard/publishride" className="underline">
              Publish ride
            </Link>{" "}
            on top of website. Indicate from where , to where , date , leaving
            time, reaching time, how many passengers you can take, and the price
            per seat. Click on proceed to add stop points, if no stop point tap
            "Publish" and you're done!
          </AccordionDetails>
        </Accordion>
      </AnimateBU>
      <AnimateBU
        distance={100}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
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
            aria-controls="panel4-content"
            id="panel4-header"
            className="text-base font-normal sm2xl:text-xs smxl:text-sm"
          >
            How much does a ride cost?
          </AccordionSummary>
          <AccordionDetails className="text-sm sm2xl:text-xs">
            The costs of a carpool ride can vary greatly, and depend on factors
            like distance, time of departure, the demand of that ride and more.
            It is also up to the driver to decide how much to charge per seat,
            so it's hard to put an exact price tag on a ride.
          </AccordionDetails>
        </Accordion>
      </AnimateBU>
      <AnimateBU
        distance={100}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
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
            aria-controls="panel5-content"
            id="panel5-header"
            className="text-base font-normal sm2xl:text-xs smxl:text-sm"
          >
            How can I verify my account?
          </AccordionSummary>
          <AccordionDetails className="text-sm sm2xl:text-xs">
            Go to{" "}
            <Link to="/dashboard/myprofile?profile=about" className="underline">
              Account
            </Link>{" "}
            , Under "Verify your profile" click on "Verify your govt. id" then
            you can upload any govt. document like driving license, aadhar card,
            PAN card, etc. Within 24 hours, your document will be verified.
          </AccordionDetails>
        </Accordion>
      </AnimateBU>
      <AnimateBU
        distance={100}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
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
            aria-controls="panel6-content"
            id="panel6-header"
            className="text-base font-normal sm2xl:text-xs smxl:text-sm"
          >
            Where do I report an issue?
          </AccordionSummary>
          <AccordionDetails className="text-sm sm2xl:text-xs">
            If you encounter any issues or have questions, please feel free to
            contact our team through the{" "}
            <Link to="/contact" className="underline">
              Contact Us
            </Link>{" "}
            page.
          </AccordionDetails>
        </Accordion>
      </AnimateBU>
    </div>
  );
}
