import { useParams } from "react-router-dom";

interface SingleProps {}

const Single = (props: SingleProps) => {
	const { sponsorID } = useParams<{ sponsorID: string }>();

	return <h1>Single Sponsor: {sponsorID}</h1>;
};

export default Single;
