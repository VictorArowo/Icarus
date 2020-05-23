import Link from "next/link";
import classNames from "../../utils/classNames";
import { useRouter } from "next/dist/client/router";

interface Props {
  name: string;
  icon: JSX.Element;
  index: number;
}

const SidebarItem: React.FC<Props> = ({ name, icon, index }) => {
  const router = useRouter();

  return (
    <Link href={`/${name.toLowerCase()}`}>
      <a
        href="#"
        className={classNames(
          " group flex items-center px-2 py-2 mb-3 text-base leading-6 font-medium rounded-md transition ease-in-out duration-150",
          router.pathname === `/${name.toLowerCase()}`
            ? "text-primary-text bg-hover-background focus:bg-gray-200"
            : "text-secondary-text hover:text-secondary-text hover:bg-primary-background focus:text-gray-900 focus:bg-gray-100",
          index === 0 ? "" : "mt-1"
        )}
      >
        <div className="w-6 h-6 mr-3">{icon}</div>
        {name}
      </a>
    </Link>
  );
};

export default SidebarItem;
