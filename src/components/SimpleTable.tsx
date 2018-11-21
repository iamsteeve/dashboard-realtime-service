
import * as React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const styles = (theme: Theme) =>createStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });
  
  let id = 0;
  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  }
  
  const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  interface IPropsSimpleTable extends WithStyles<typeof styles> {
      
  }

  const SimpleTable: React.SFC<IPropsSimpleTable> = (props: IPropsSimpleTable) => {
    const { classes } = props;
  
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell numeric={true}>Calories</TableCell>
              <TableCell numeric={true}>Fat (g)</TableCell>
              <TableCell numeric={true}>Carbs (g)</TableCell>
              <TableCell numeric={true}>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row">
                    {n.name}
                  </TableCell>
                  <TableCell numeric={true}>{n.calories}</TableCell>
                  <TableCell numeric={true}>{n.fat}</TableCell>
                  <TableCell numeric={true}>{n.carbs}</TableCell>
                  <TableCell numeric={true}>{n.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  
  
  export default withStyles(styles)(SimpleTable);
  