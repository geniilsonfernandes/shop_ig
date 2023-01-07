import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$green500",
  "&:hover": {
    backgroundColor: "red",
  },
});

export default function Home() {
  return <Button>hello wold</Button>;
}
