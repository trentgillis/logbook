import { Check, Zap } from 'lucide-react';

type SendTypeBadgeProps = {
  flash?: boolean;
};

function SendTypeBadge({ flash }: SendTypeBadgeProps) {
  return <div>{flash ? <Zap /> : <Check />}</div>;
}

export default SendTypeBadge;
