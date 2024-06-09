import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChapterList } from "./chapter/ChapterList";
import { ChapterCreate } from "./chapter/ChapterCreate";
import { ChapterEdit } from "./chapter/ChapterEdit";
import { ChapterShow } from "./chapter/ChapterShow";
import { OutlineItemList } from "./outlineItem/OutlineItemList";
import { OutlineItemCreate } from "./outlineItem/OutlineItemCreate";
import { OutlineItemEdit } from "./outlineItem/OutlineItemEdit";
import { OutlineItemShow } from "./outlineItem/OutlineItemShow";
import { SceneList } from "./scene/SceneList";
import { SceneCreate } from "./scene/SceneCreate";
import { SceneEdit } from "./scene/SceneEdit";
import { SceneShow } from "./scene/SceneShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ChapterService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Chapter"
          list={ChapterList}
          edit={ChapterEdit}
          create={ChapterCreate}
          show={ChapterShow}
        />
        <Resource
          name="OutlineItem"
          list={OutlineItemList}
          edit={OutlineItemEdit}
          create={OutlineItemCreate}
          show={OutlineItemShow}
        />
        <Resource
          name="Scene"
          list={SceneList}
          edit={SceneEdit}
          create={SceneCreate}
          show={SceneShow}
        />
      </Admin>
    </div>
  );
};

export default App;
