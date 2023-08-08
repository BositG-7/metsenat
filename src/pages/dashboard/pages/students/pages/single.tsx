import { useParams } from "react-router-dom";

interface SingleProps {}

const Single = (props: SingleProps) => {
	const { studentID } = useParams<{ studentID: string }>();

	return <h1>Single Student: {studentID}</h1>;
};

export default Single;
