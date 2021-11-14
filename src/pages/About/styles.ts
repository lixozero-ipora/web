import styled from 'styled-components';
import { ContentText } from '../../components/Common/styles';

export const AboutContent = styled(ContentText)`
	li {
		margin: 10px 0;
	}

	li > span {
		padding: 5px;
		border-radius: 10px;
		color: white;
		background-color: var(--color-green);
	}

	.magenta {
		background-color: #c456a5;
	}
	.light-blue {
		background-color: #74b1bf;
	}
	.green {
		background-color: #2ca02c;
	}
	.orange {
		background-color: #fc7c3c;
	}
	.wine {
		background-color: #e55274;
	}
	.purple {
		background-color: #936ad1;
	}
	.water {
		background-color: #4a9ec2;
	}
	.brown {
		background-color: #a86939;
	}
`;
