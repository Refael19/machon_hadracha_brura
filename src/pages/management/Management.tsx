import DisplayManagement from "./componentsManagement/DisplayManagement";

const Management = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl">ניהול</h1>
      {<DisplayManagement />}
    </div>
  );
};

export default Management;
