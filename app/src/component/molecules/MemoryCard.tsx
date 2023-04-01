import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Image from "component/atoms/Image";
import Text from "component/atoms/Text";
import { Memory } from "component/templates";

interface Props {
  memory: Memory;
}

const useStyles = makeStyles(() => ({
  memberArea: {
    paddingBottom: "30px",
    minhHeight: "80px",
  },
}));

export const MemoryCard = (props: Props) => {
  const memory = props.memory;
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Card>
        <CardActionArea>
          <Image src={memory.src} />
          <CardContent>
            <Grid container direction="column" spacing={1}>
              <Grid container item spacing={1} wrap="nowrap">
                {memory.members.map((member, index) => {
                  return (
                    <Grid item>
                      <Chip label={member} key={index} variant="outlined" />
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item>
                <Typography>{memory.restaurant}</Typography>
              </Grid>
              <Grid item>
                <Typography>{memory.date}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MemoryCard;
