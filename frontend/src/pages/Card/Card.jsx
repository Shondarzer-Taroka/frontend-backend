
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const CardItem = ({title,description}) => {
    return (
        <div>
            <Link to={`details/${title}`}>
                <Card className="max-w-sm bg-slate-200">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                       {title}
                    </h5>
                    <div style={{ height: '1px', border: '1px solid black' }} className="m-0"></div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </Card>
            </Link>
        </div>
    );
};

export default CardItem;