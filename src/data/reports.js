import { IoAnalytics, IoPeople, IoPersonAdd, IoWallet } from "react-icons/io5";

export const reports = [
    {
      id: 28935,
      icon: <IoWallet className='text-inherit' />,
      tips: "Today's Money",
      total: '$53k',
      tag: '+53% than last week',
      background: 'dark'
    },
    {
      id: 28936,
      icon: <IoPeople className='text-inherit' />,
      tips: "Today's Clients",
      total: '2,300',
      tag: '13% of Total Clients',
      background: 'disabled'
    },
    {
      id: 28937,
      icon: <IoPersonAdd className='text-inherit' />,
      tips: "All Agents",
      total: '50',
      tag: '+3 in the last week',
      background: 'cool'
    },
    {
      id: 28938,
      icon: <IoAnalytics className='text-inherit' />,
      tips: "Sales",
      total: '$23,500',
      tag: '+5% higher than last month',
      background: 'active'
    },
  ]