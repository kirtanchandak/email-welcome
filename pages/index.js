import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import StockApi from "../components/StockApi";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["google"]}
          />
        </div>
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Home;
