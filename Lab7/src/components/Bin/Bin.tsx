import {Link} from "react-router-dom";
import {Badge, Button} from "reactstrap";

type Props = {
    isActive: boolean,
    draft_calculation_id: string,
    codes_count: number
}

const Bin = ({isActive, draft_calculation_id, codes_count}:Props) => {

    if (!isActive) {
        return <Button color={"secondary"} className="bin-wrapper" disabled>Корзина</Button>
    }

    return (
        <Link to={`/calculations/${draft_calculation_id}/`} className="bin-wrapper">
            <Button color={"primary"} className="w-100 bin">
                Корзина
                <Badge>
                    {codes_count}
                </Badge>
            </Button>
        </Link>
    )
}

export default Bin