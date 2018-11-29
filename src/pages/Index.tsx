import * as React from 'react';





import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../components/withRoot';
import Dashboard from 'src/components/Dashboard';

const styles = (theme: Theme) =>
  createStyles({});

interface IState {
  open: boolean;
};

class Index extends React.Component<WithStyles<typeof styles>, IState> {
  public state: IState = {
    open: false,
  };

  public render() {
    return (
      <main >
        <Dashboard/>
      </main>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
