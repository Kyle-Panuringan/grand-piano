import {
  Box,
  Typography,
  styled,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import courseBG from "../assets/courseBG.jpg";

const courses = [
  {
    coursePlan: "Beginner",
    price: "$100",
    subscription: "Per Month",
    content: ["Unlimited Support", "20 Assignments", "100 Lessons"],
  },
  {
    coursePlan: "Intermediate",
    price: "$200",
    subscription: "Per Month",
    content: ["Unlimited Support", "50 Assignments", "200 Lessons"],
  },
  {
    coursePlan: "Expert",
    price: "$300",
    subscription: "Per Month",
    content: ["Unlimited Support", "80 Assignments", "300 Lessons"],
  },
];

const BoxContainer = styled(Box)({
  backgroundImage: `url(${courseBG})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
});

const Courses = () => {
  return (
    <BoxContainer id="Courses">
      <Box
        sx={{
          bgcolor: "rgba(0,0,0,0.7)",
          py: "20px",
        }}
      >
        <Typography variant="h2" textAlign="center">
          Courses
        </Typography>
        <Typography
          variant="h4"
          textAlign="center"
          color="text.secondary"
          fontStyle="italic"
        >
          Pick a course to become a pianist.
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "300px 300px 300px" },
            justifyContent: "center",
            paddingTop: "20px",
            px: "20px",
            gap: 4,
          }}
        >
          {courses.map((course) => {
            return (
              <Card>
                <CardContent
                  sx={{ textAlign: "center", p: 0, "&:last-child": { pb: 0 } }}
                >
                  <Box sx={{ py: "7px" }}>
                    <Typography variant="h4">{course.coursePlan}</Typography>
                  </Box>
                  <Box sx={{ py: "10px", bgcolor: "primary.light" }}>
                    <Typography variant="h2">{course.price}</Typography>
                    <Typography variant="h6" color="text.secondary">
                      {course.subscription}
                    </Typography>
                  </Box>
                  <Box sx={{ py: "17px" }}>
                    {course.content.map((content) => (
                      <Typography variant="h6" color="text.secondary">
                        {content}
                      </Typography>
                    ))}
                    <Button
                      variant="contained"
                      sx={{
                        my: "10px",
                        width: "90%",
                        bgcolor: "secondary.dark",
                        letterSpacing: "2px",
                        fontWeight: "bolder",
                        fontSize: "1.2rem",
                      }}
                    >
                      Enroll
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>
    </BoxContainer>
  );
};

export default Courses;
