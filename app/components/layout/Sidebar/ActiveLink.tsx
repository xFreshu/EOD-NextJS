import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavItem } from './Sidebar.styled';

const ActiveLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const isActive = usePathname() === href;

  return (
    <Link href={href} passHref>
      <NavItem active={isActive}>{children}</NavItem>
    </Link>
  );
};

export default ActiveLink;
