import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex p-5">
      <aside className="bg-slate-200 h-full">Admin Sidebar</aside>
      <main className="">{children}</main>
    </div>
  );
};

export default AdminLayout;
