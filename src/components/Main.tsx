import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardContent,
  ColorPaletteProp,
  Divider,
  Typography,
} from "@mui/joy";
import { PropsWithChildren } from "react";

const Main: React.FC = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        width: "100%",
        maxWidth: "900px",
        margin: "auto",
        padding: "0rem 1rem 3rem 1rem",
      }}
    >
      <IntroSection />
      <PreventionSection />
      <RecoverySection />
      <WorkshopSection />
    </Box>
  );
};

const IntroSection: React.FC = () => {
  return (
    <Section>
      <Typography level="h1" sx={{ textAlign: "center", padding: "4rem" }}>
        So you've Clicked on a{" "}
        <Typography color="danger">Phishing Link 🪝</Typography>
      </Typography>
      <Typography>
        You have clicked on a phishing link. However, do not be alarmed, this is
        a <Typography fontWeight="bold">simulated phishing attack</Typography>.
        The purpose of this exercise is to raise awareness about phishing scams
        and equip individuals like you with the necessary skills to defend
        yourselves against such scams.
        <br />
        <br />
        We offer training workshops with a chance to win attractive prizes.{" "}
        <Typography fontWeight="bold">Read on to find out more!</Typography>
      </Typography>
    </Section>
  );
};

const PreventionSection: React.FC = () => {
  return (
    <Section title="How can I protect myself?">
      <Typography>
        Although phishing scams can take many forms, most of them share some
        common red flags. To help you remember what to look out for, apply our
        simple acronym.
      </Typography>
      <Typography level="h2" color="primary" sx={{ textAlign: "center" }}>
        SMS
      </Typography>
      <CardBox>
        <InfoCard
          title="Sender"
          message="Inspect the sender information to ensure that it is from the expected sender. Beware of small discrepancies such as a single different character."
        />
        <InfoCard
          title="Message"
          message="Inspect the message for spelling mistakes, grammar mistakes, low quality images, and other small errors. These are red flags."
        />
        <InfoCard
          title="Site"
          message="Suppose the sender and message looks legitimate and you've decided to click on the link. Inspect the site's link to ensure that you are on the right site."
        />
      </CardBox>
    </Section>
  );
};

const RecoverySection: React.FC = () => {
  return (
    <Section title="Oh no! I've fallen victim to a phishing attack. What now?">
      <Typography>
        Stay calm, don't panic. Try to recall what information you entered on
        the phishing site. If you're having difficulty remembering, apply our
        next acronym.
      </Typography>
      <Typography level="h2" color="danger" sx={{ textAlign: "center" }}>
        PIC
      </Typography>
      <CardBox>
        <InfoCard
          title="Password"
          message="Did you provide your password? If so, change your password for all accounts that uses the same password. Scammers will often try to use stolen login credentials on multiple sites."
          color="danger"
        />
        <InfoCard
          title="Identity"
          message="Did you provide your personal information (name, gender, etc.)? If so, be on the lookout for follow-up scams. Scammers may exploit these information to craft more convincing scams targetted specifically at you."
          color="danger"
        />
        <InfoCard
          title="Credit Card"
          message="Did you provide your credit card information? If so, report the incident to your bank or credit card company. You will have to obtain a new card and dispute unauthorised transactions (if any have been made)."
          color="danger"
        />
      </CardBox>
    </Section>
  );
};

const WorkshopSection: React.FC = () => {
  return (
    <Section title="Where can I go to to learn more?">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "2fr 3fr" },
          gap: "2rem",
        }}
      >
        <AspectRatio
          ratio="4/3"
          variant="outlined"
          objectFit="cover"
          sx={{ borderRadius: "md" }}
        >
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/3/32/Sengkang_Community_Hub.JPG"
          />
        </AspectRatio>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography level="h2" sx={{ textAlign: "center" }}>
            Free <Typography color="primary">Workshops</Typography>
          </Typography>
          <Typography>
            We offer <Typography fontWeight="bold">free</Typography> workshops
            hosted at community centres for educating and enhancing individuals
            to protect themselves against such scams.
          </Typography>
          <Typography>
            Participants will receive{" "}
            <Typography fontWeight="bold">vouchers</Typography> and also stand a
            chance to win{" "}
            <Typography fontWeight="bold">attractive prizes.</Typography>
          </Typography>
          <Button>Read More</Button>
        </Box>
      </Box>
    </Section>
  );
};

const Section: React.FC<PropsWithChildren<{ title?: string }>> = ({
  children,
  title,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {title === undefined ? null : (
        <>
          <Typography level="h2" sx={{ textAlign: "center" }}>
            {title}
          </Typography>
          <Divider />
        </>
      )}
      {children}
    </Box>
  );
};

const CardBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
        gap: "1rem",
      }}
    >
      {children}
    </Box>
  );
};

const InfoCard: React.FC<{
  title: string;
  message: string;
  color?: ColorPaletteProp;
}> = ({ title, message, color = "primary" }) => {
  const titleFirstChar: string = title.substring(0, 1);
  const titleRemainder: string = title.substring(1);

  return (
    <Card>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        <Typography level="title-lg">
          <Typography color={color} fontWeight="bold" fontSize="2rem">
            {titleFirstChar}
          </Typography>
          {titleRemainder}
        </Typography>
        <Divider />
        <Typography level="body-md">{message}</Typography>
      </CardContent>
    </Card>
  );
};

export default Main;
