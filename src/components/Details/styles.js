import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  income: {
    marginBottom: '-10px',
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  expense: {
    marginBottom: '-10px',
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
}));