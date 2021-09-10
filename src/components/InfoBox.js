import { Card, CardContent, Typography } from "@material-ui/core"

function InfoBox({ title, cases, total }) {
    return (
        <Card>
            <CardContent>

                <Typography classeName='infoBox__title'color="textSecondary">
                    {title}
                </Typography>


                <h2 classeName='infoBox__cases'>
                    {cases}
                </h2>

                <Typography classeName='infoBox__total' color="textSecondary">
                    {total} Total
                </Typography>
                
            </CardContent>
        </Card>
    )
}

export default InfoBox
