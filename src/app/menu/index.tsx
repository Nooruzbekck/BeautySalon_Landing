import { Title } from "@/shared/title";
import Link from "next/link";
import { ROUTES } from "../../data";
import { IRoutes } from "@/common";

const MenuPage = () => {
  return (
    <div className="w-full mx-auto container h-[100vh] flex items-center">
      <div className="px-24 grid grid-cols-2 lg:grid-cols-1 gap-10 sm:px-12 xs:px-6">
        {ROUTES.map((item: IRoutes) => (
          <Link key={item.link} href={item.link}>
            <Title
              text={item.name}
              classNames="font-[600] text-[64px] xs:text-[48px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
