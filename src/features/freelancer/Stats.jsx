import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";

import Stat from "../../ui/Stat";
import toPersianNumbersWithComma from "../../utils/toPersianNumbers";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="purple"
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
        icon={<HiCollection className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
