import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    /*   
      media: {
          paddingTop: '220%',
      },
     */
    root: {
        maxWidth: '300px',
    },
    media: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '300px',
        maxWidth: '300px',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',

    }
}));