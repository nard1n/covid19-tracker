import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>

                <Typography classeName='infoBox__title' color="textSecondary">
                    {title}
                </Typography>


                <h2 classeName='infoBox__cases'>
                    {cases}
                </h2>

                <Typography color="textSecondary" classeName='infoBox__total' >
                    {total} Total
                </Typography>
                
            </CardContent>
        </Card>
    )
}

export default InfoBox
