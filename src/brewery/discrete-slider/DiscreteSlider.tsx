import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value: number) {
  return `${value}°C`;
}

type DiscreteSliderProps = {
  year: any
  setYear: any
}

export const DiscreteSlider: FunctionComponent<DiscreteSliderProps> = ({year, setYear}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        in years
      </Typography>
      <Slider
        onChange={(e, val) => setYear(+val)}
        defaultValue={year}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={50}
      />
    </div>
  );
}
