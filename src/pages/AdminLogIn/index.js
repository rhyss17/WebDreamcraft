import React from "react";

import { Button, Img, Input, Text } from "components";
import AdminLogInAdminlogin from "components/AdminLogInAdminlogin";

const AdminLogInPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto p-[37px] sm:px-5 w-full">
        <AdminLogInAdminlogin className="flex flex-col items-center justify-start max-w-[1651px] mb-[67px] mx-auto md:px-5 w-full" />
      </div>
    </>
  );
};

export default AdminLogInPage;
